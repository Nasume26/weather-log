import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import "./Nav.scss"

const Nav = (props) => {
    const { setWeatherData } = props;

    const [search,setSearch] = useState()

    const getWeatherData = () => {

    }


    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="nav-container">
            <p>Nav</p>
            <Search search = {search} handleInput ={handleInput}/>
        </div>

    )
}

export default Nav;