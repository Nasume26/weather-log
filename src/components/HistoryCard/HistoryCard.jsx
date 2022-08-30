import "./HistoryCard.scss"
import scatteredClouds from '../../images/scattered clouds.png'
import brokenClouds from "../../images/broken clouds.png"
import clearSkies from "../../images/clear skies.png"

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
        if (historyData.imageKey == "Clouds") {
            return scatteredClouds
        } else if (historyData.imageKey == "Clear") {
            return clearSkies
        }
    }
    
    return (
        <div className="history-container">
                <div className="history-container__top">
                    <div className="history-container__top__header">
                        <h1>{renderDate.toDateString()} </h1>
                        <p>{renderDate.toTimeString()}</p>
                    </div>
                
                    <h3>{historyData.temp} degrees farenheit</h3>
                    <h4>RealFeel: {historyData.feelTemp}</h4> 
                </div>
                <div className="history-container__mid">
                    <p>{historyData.cond}</p>
                    <p>Humidity: {historyData.humidity}%</p>
                </div>
                <div>
                    <img src={imageFilter()}/>
                </div>
            <div>

            </div>
        </div>
    )
}

export default HistoryCard;