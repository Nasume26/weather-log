import HistoryCard from "../../components/HistoryCard/HistoryCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import HistoryContainer from "../HistoryContainer/HistoryContainer";


const Home = (props) => {
    const {weatherData, historyData} = props;


   
    


    return (
        <div className="home-container">
            {!weatherData && <h1>Test</h1>}
        {weatherData && <WeatherCard weatherData={weatherData}/>}
        {historyData && <HistoryContainer historyData= {historyData}/>}

        </div>

    )
}

export default Home;