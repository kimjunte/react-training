import MovieHeader from "./MovieHeader";
import MovieRow from "./MovieRow";

const MovieTable = props => {
    const {movies} = props;
    console.log(movies);
    return (
        <table>
            <MovieHeader/>
            <tbody>
                {movies.map(movie => <MovieRow movie={movie}/>)}
            </tbody>
        </table>

    );
}

export default MovieTable;