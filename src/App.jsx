import Nav from './containers/Nav/Nav';
import Home from './containers/Home/Home';

import { useState, useEffect } from 'react';



function App() {

const [weatherData, setWeatherData] = useState();









  return (
    <div className="App">
      <Nav setWeatherData = {setWeatherData}/>
      <Home />
    </div>
  );
}

export default App;
