import HistoryCard from "../../components/HistoryCard/HistoryCard";


const HistoryContainer = (props) => {
    const { historyData } = props;
    const renderHistory = 
    historyData.map((history) => {
        return <HistoryCard historyData= {history} />
    })

    return (
        <>
            {renderHistory}
        </>
    )
}

export default HistoryContainer