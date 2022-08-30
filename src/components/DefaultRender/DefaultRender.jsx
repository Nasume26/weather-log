import "./DefaultRender.scss"

const DefaultRender = (props) => {


    return (

        <div className="default-container">
            <div className="default-container__main">
                 <h1>Welcome to Weather Log!</h1>
                 <p>In order to use this application, please input your desired
                    location in the search bar. Every time you search for weather data, 
                    that data is logged and stored in a database for the next
                    person to see! Please note that history data is based on your Search
                    terms, to get the best results use <span className="default-container__main__bold">CITY,STATE,COUNTRY</span> as your Search 
                    term!
                 </p>
            </div>
        </div>
    )
}

export default DefaultRender;