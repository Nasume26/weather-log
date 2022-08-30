import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import "./Nav.scss"

const Nav = (props) => {
    const { setWeatherData, setHistoryData, weatherData } = props;

    const [search,setSearch] = useState()

    const getWeatherData = (event) => {
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=f22f1790421db906a5f1f903e89a28db&units=imperial`,
        )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(data.cod === "404") {

            } else {
            setWeatherData(data)}
            return data
    }).then ((data) => {
        if(data.cod=== "404") {
        alert("The location you are trying to access is not valid")
    } else {
        postData(data)
    }
    })
        .catch((err) => {
            console.log(err)
        })

        fetch (`http://localhost:3007/api/weather/${search}`,
        {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }).then((res) => {
        return res.json()
      })
      .then((data)=> {
   
        setHistoryData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  
    }


    const postData = (data) => {
        fetch(`http://localhost:3007/api/weather/`, {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location: search,
                temp: data.main.temp,
                feelTemp: data.main.feels_like,
                cond: data.weather[0].description,
                humidity: data.main.humidity,
                imageKey: data.weather[0].main
            })

        })
    }

    const handleInput = (event) => {
        const cleanInput= event.target.value.toLowerCase()
        
        setSearch(cleanInput)
        setHistoryData("")
        setWeatherData("")
    }

   

    return (
        <div className="nav-container">
            <h1 className="nav-container__heading">Weather-Log</h1>
            <Search search = {search} handleInput ={handleInput} getWeatherData = {getWeatherData}/>
        </div>

    )
}

export default Nav;