import {Link} from 'react-router-dom'
const Favorites = () => {
    
    return ( 
        <div>
            <Link to="/">Home</Link>
            <p>city</p>
            {/* <div className='main'>
                {data ? <h2>{data.name}</h2> : null}
                {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : <ErrorCity />}
                {data.weather ? <h2>{data.weather[0].description}</h2> : null}
                <div className="h-l">
                    {data.main ? <p>High: {data.main.temp_max.toFixed()}°F</p> : null}
                    {data.main ? <p>Low: {data.main.temp_min.toFixed()}°F</p> : null}
                </div>
            </div> */}

        </div>
     );
}
 
export default Favorites;