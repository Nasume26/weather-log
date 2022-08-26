import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import "./Nav.scss"

const Nav = (props) => {
    const { setWeatherData } = props;

    const [search,setSearch] = useState()

    const getWeatherData = (event) => {
        event.preventDefault();
        fetch(`api.openweathermap.org/data/2.5/weather?q=${search}&APPID=f22f1790421db906a5f1f903e89a28db`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
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