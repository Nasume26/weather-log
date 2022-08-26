import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import "./Nav.scss"

const Nav = (props) => {
    const { setWeatherData, setHistoryData } = props;

    const [search,setSearch] = useState()

    const getWeatherData = (event) => {
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=f22f1790421db906a5f1f903e89a28db&units=imperial`,
        )
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setWeatherData(data)
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
        console.log(data)
        setHistoryData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  
    }


    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="nav-container">
            <p>Nav</p>
            <Search search = {search} handleInput ={handleInput} getWeatherData = {getWeatherData}/>
        </div>

    )
}

export default Nav;