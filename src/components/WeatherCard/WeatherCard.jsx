import './WeatherCard.scss'
import scatteredClouds from '../../images/scattered clouds.png'
import brokenClouds from "../../images/broken clouds.png"
import clearSkies from "../../images/clear skies.png"

const WeatherCard = (props) => {
    const {weatherData} = props;


    const imageFilter = () => {
        if (weatherData.weather[0].main == "Clouds") {
            return scatteredClouds
        } else if (weatherData.weather[0].main == "Clear") {
            return clearSkies
        }
    }

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
            <img src={imageFilter()} />
            </div>
        </div>

    )
}

export default WeatherCard;