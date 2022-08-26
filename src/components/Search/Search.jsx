import './Search.scss'

const Search =(props) => {
    const {search, handleInput, getWeatherData} = props;


    return (
        <div className="search-container">
        <form onSubmit={getWeatherData}>
            <label>Search:
                <input
                type="text"
                value={search}
                onInput={handleInput}
                >
                </input>
            </label>
        </form>
        </div>
    )
}
export default Search;