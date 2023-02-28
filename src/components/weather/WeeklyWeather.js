import { useEffect, useState } from "react";
import DailyForcast from "./DailyForcast";
import { useSelector, useDispatch } from 'react-redux'


const WeeklyWeather = () => {
    const city = useSelector((state) => state.city.city);

    const [coordinates, setCoordinates] = useState({})
    const [weeklyForcast, setWeeklyForcast] = useState({})

    const getCoordinates = () => {
        
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
                .then(response => response.json())
                .then(data => setCoordinates(data.results[0]))
                .then(getForcast())
        
    }
    const getForcast = () => {
        if (coordinates.latitude) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&timezone=America%2FNew_York&daily=temperature_2m_max&daily=temperature_2m_min`)
                .then(response => response.json())
                .then(data => setWeeklyForcast(data.daily))
                .then(console.log(weeklyForcast))
        }
    }

        useEffect(() => {
            getCoordinates()
        }, [city]);
    
        function convertToF(celsius) {
            const fahrenheit = celsius * (9 / 5) + 32;
            return fahrenheit;
        }

        return ( 
            <div>
                {weeklyForcast.time ? <p>test</p> : null}
                {weeklyForcast.time ? weeklyForcast.time.map((day, index) => <p key={index}>{day} High: {convertToF(weeklyForcast.temperature_2m_max[index]).toFixed()} Low: {convertToF(weeklyForcast.temperature_2m_max[index]).toFixed()} </p>) : null}
                {/* {weeklyForcast.time?.map((day, index) => <DailyForcast forcast={weeklyForcast} key={index} />) } */}
            </div>
        );
}
 
export default WeeklyWeather;