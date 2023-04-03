import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setcurrentWeather } from '../../features/weather/currentWeatherSlice';
import ErrorCity from './ErrorCity';
import heart from '../../assets/heart.png'
import redHeart from '../../assets/red-heart.png'

const CurrentWeather = () => {
    const city = useSelector((state) => state.city.city);
    const data = useSelector((state) => state.current.data);
    const history = useHistory();
    const dispatch = useDispatch();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=imperial&appid=d8763d9fbe4cd52f511e2d222ba85715`
    
    const getCurrentWeather = async () => {
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(setcurrentWeather(data)))
    }

    useEffect(() => {
        getCurrentWeather()
    }, [city])

    const favorite = async () => {
        await fetch('/add-favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: city
            }),
            })
    }

    return (  
        <div id='current-weather'>
            <div className='main'>
                
                {data ? <h2>{data.name}</h2> : null}
                {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : <ErrorCity />}
                {data.weather ? <h2>{data.weather[0].description}</h2> : null}
                <div className="h-l">
                    {data.main ? <p>High: {data.main.temp_max.toFixed()}°F</p> : null}
                    {data.main ? <p>Low: {data.main.temp_min.toFixed()}°F</p> : null}
                </div>
            </div>
          { data.main?  <div className="details">
                {data.main ? <p>Feels Like:<br /> {data.main.feels_like.toFixed()}°F</p> : null}
                {data.main ? <p>Humidity:<br /> {data.main.humidity.toFixed()}%</p> : null}
                {data.wind ? <p>Wind:<br /> {data.wind.speed.toFixed()} MPH</p> : null} 
            </div> : null}
        </div>
    );
}
 
export default CurrentWeather;
