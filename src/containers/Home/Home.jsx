import WeatherCard from "../../components/WeatherCard/WeatherCard";


const Home = (props) => {
    const {weatherData} = props;





    return (
        <div className="home-container">
        {weatherData && <WeatherCard weatherData={weatherData}/>}

        </div>

    )
}

export default Home;