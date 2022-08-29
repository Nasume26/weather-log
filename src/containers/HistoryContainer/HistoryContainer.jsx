import HistoryCard from "../../components/HistoryCard/HistoryCard";


const HistoryContainer = (props) => {
    const { historyData } = props;

    const historySort= historyData.map((history) => {
        return history
    }).sort((a,b) => {
        return b.id - a.id;
    });

    const renderHistory = 
    historySort.map((history) => {
        return <HistoryCard historyData= {history} />
    })

    return (
        <>
            {renderHistory}
        </>
    )
}

export default HistoryContainer