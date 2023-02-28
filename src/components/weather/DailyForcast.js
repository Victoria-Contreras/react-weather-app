const DailyForcast = (forcast, key) => {
    return ( 
        <div>
            {/* <p>{key} </p> */}
            <p>{forcast.time}</p>
            {/* <div>
                <p>High: {forcast.temperature_2m_max} </p>
                <p>Low: {forcast.temperature_2m_min}</p>
            </div> */}
        </div>
     );
}
 
export default DailyForcast;