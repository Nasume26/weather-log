import './WeatherCard.scss'

const WeatherCard = (props) => {
    const {weatherData} = props;

    return (
        <div className='weather-data'>
            <div className='weather-data__top'>
                <h1>{weatherData.name}</h1>
                <h3>{weatherData.main.temp} degrees farenheit</h3>
                <h4>RealFeel: {weatherData.main.feels_like}</h4> 
            </div>
            <div>
                <p>{weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                
            </div>
            <div>
            <img src= "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" />
            </div>
        </div>

    )
}

export default WeatherCard;