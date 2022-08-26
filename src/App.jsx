import Nav from './containers/Nav/Nav';
import Home from './containers/Home/Home';

import "./App.scss"

import { useState, useEffect } from 'react';



function App() {

const [weatherData, setWeatherData] = useState();
const [historyData, setHistoryData] = useState();









  return (
    <div className="App">
      <Nav setWeatherData = {setWeatherData} setHistoryData= {setHistoryData} weatherData ={weatherData}/>
      <Home weatherData= {weatherData} historyData = {historyData}/>
    </div>
  );
}

export default App;
