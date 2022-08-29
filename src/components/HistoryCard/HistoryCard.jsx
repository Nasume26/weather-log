import "./HistoryCard.scss"
import scatteredClouds from '../../images/scattered clouds.png'

const HistoryCard = (props) => {
    const { historyData } = props;
    console.log(historyData)

    const filterDate = historyData.createdAt.split("T", 1).pop()
    const parsedDate = filterDate.split(/[- : ]/)

    const timeSplit = historyData.createdAt.split("T", -1).pop()
    const timeSplitEnd = timeSplit.split(".", 1).pop()
    const parsedTimeSplit= timeSplitEnd.split(/[- : ]/)
    const renderDate = new Date(Date.UTC(parsedDate[0], parsedDate[1]-1, parsedDate[2], parsedTimeSplit[0], parsedTimeSplit[1], parsedTimeSplit[2]));


    const imageFilter = () => {
        if (historyData.cond == "scattered clouds") {
            return scatteredClouds
        }
    }
    
    return (
        <div className="history-container">
            <h1>{renderDate.toDateString()} </h1>
            <p>{renderDate.toTimeString()}</p>
            <div>
                <h3>{historyData.temp} degrees farenheit</h3>
                <h4>RealFeel: {historyData.feelTemp}</h4> 
                <p>{historyData.cond}</p>
                <p>Humidity: {historyData.humidity}%</p>
            </div>
            <img src={imageFilter()}/>
            <div>

            </div>
        </div>
    )
}

export default HistoryCard;