

const Search =(props) => {
    const {search, handleInput} = props;


    return (
        <>
        <form>
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