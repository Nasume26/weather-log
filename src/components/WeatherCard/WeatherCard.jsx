import './WeatherCard.scss'

const WeatherCard = (props) => {
    const {weatherData} = props;

    return (
        <div className='weather-data'>
            <h1>{weatherData.name}</h1>
            <h3>{weatherData.main.temp} degrees farenheit</h3>
            <h4>RealFeel: {weatherData.main.feels_like}</h4> 
            <p>{weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>

        </div>

    )
}

export default WeatherCard;