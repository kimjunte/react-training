import {useState, useEffect} from 'react'

const MovieSearchForm = ({onNewSearchTerm}) => {
    const [textBox, setTextBox] = useState('')

    const handleSearch = () => {
        // ultimately we must read the search term from the text box
        onNewSearchTerm(textBox);
    }
    return (
        <form>
            <label>Search Movies</label>
            <input value={textBox} onChange={e => setTextBox(e.target.value)}/>
            {/* Set the type to button to prevent the fomrm data from being posted to the server */}
            <button type="button" onClick={handleSearch}>Search</button>
        </form>
    );

}

export default MovieSearchForm;