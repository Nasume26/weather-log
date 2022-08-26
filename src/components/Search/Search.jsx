

const Search =(props) => {
    const {search, handleInput, getWeatherData} = props;


    return (
        <>
        <form onSubmit={getWeatherData}>
            <label>Search
                <input
                type="text"
                value={search}
                onInput={handleInput}
                >
                </input>
            </label>
        </form>
        </>
    )
}
export default Search;