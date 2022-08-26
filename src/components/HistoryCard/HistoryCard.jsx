

const HistoryCard = (props) => {
    const { historyData } = props;
    console.log(historyData)

    return (
        <div className="history-container">
            <h1>{historyData.createdAt}</h1>
            <h3>{historyData.temp} degrees farenheit</h3>
            <h4>RealFeel: {historyData.feelTemp}</h4> 
            <p>{historyData.cond}</p>
            <p>Humidity: {historyData.humidity}%</p>
        </div>
    )
}

export default HistoryCard;