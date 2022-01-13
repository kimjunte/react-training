const MovieSearchForm = ({onNewSearchTerm}) => {
    console.log(onNewSearchTerm);

    const handleSearch = () => {
        // ultimately we must read the search term from the text box
        onNewSearchTerm('blues');
    }
    return (
        <form>
            <label>Search Movies</label>
            <input/>
            {/* Set the type to button to prevent the fomrm data from being posted to the server */}
            <button type="button" onClick={handleSearch}>Search</button>
        </form>
    );

}

export default MovieSearchForm;