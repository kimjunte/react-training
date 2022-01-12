const MovieCounter = props => {
    const {movies} = props;
    const noOfMovies = movies.length;
    return (
        <p>
            There is {noOfMovies} movies in the database
        </p>
    );
}

export default MovieCounter;