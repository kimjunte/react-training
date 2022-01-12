

const MovieForm = ({addMovieHandler}) => {
    const movie_data = {Title: "I added this", Poster: "Dramatic", Year:"2022", Review: []}

    const handleMovieData = () => {
        addMovieHandler(movie_data)
    }
    return (
        <button onClick={handleMovieData}>Add Movie Data</button>
    );
};

export default MovieForm;   