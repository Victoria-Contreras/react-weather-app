import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import DailyForcast from "./DailyForcast";

const WeeklyWeather = () => {
    const city = useSelector((state) => state.city.city);
    const [weeklyForcast, setWeeklyForcast] = useState({});


    const getCoordinates = () => {
        
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
                .then(response => response.json())
                .then(data => getForcast(data.results[0]))
        
    }
    const getForcast = (coordinates) => {
        if (coordinates.latitude) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&timezone=America%2FNew_York&daily=temperature_2m_max&daily=temperature_2m_min`)
                .then(response => response.json())
                .then(data => setWeeklyForcast(data.daily))
        }
    }

    useEffect(() => {
        getCoordinates()
    }, [city]);

    
    return ( 
        <div id="forcast">
            {weeklyForcast.time ? weeklyForcast.time.map((day, index) => <DailyForcast forcast={weeklyForcast} i={index} key={ index } />) : null}
        </div>
    );
}
 
export default WeeklyWeather;