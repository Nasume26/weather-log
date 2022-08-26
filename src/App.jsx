import Nav from './containers/Nav/Nav';
import Home from './containers/Home/Home';

import { useState, useEffect } from 'react';



function App() {

const [weatherData, setWeatherData] = useState();


const getWeatherData = () => {
  fetch()
}







  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
