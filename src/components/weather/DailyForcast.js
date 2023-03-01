import moment from 'moment';

const DailyForcast = ({ forcast, i }) => {
    function convertToDay(date) {
        const day = moment(date).format('dddd');
        return day;
    }

    function convertToF(celsius) {
        const fahrenheit = celsius * (9 / 5) + 32;
        return fahrenheit.toFixed();
    }

    return ( 
        <div id="daily-forcast">
            <div className="forcast-day">
                <h3>{convertToDay(forcast.time[i])}</h3>
            </div>
            <div className="forcast-h-l">
                <p>High: {convertToF(forcast.temperature_2m_max[i])}°F</p>
                <p>Low: {convertToF(forcast.temperature_2m_min[i])}°F</p>
            </div>
        </div>
     );
}
 
export default DailyForcast;