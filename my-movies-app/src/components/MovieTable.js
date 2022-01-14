import MovieHeader from "./MovieHeader";
import MovieRow from "./MovieRow";
import {Link} from 'react-router-dom';

const MovieTable = props => {
    const {movies} = props;
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movies.map(({Poster, imdbID}) => {
               return (
                    <Link key={imdbID} to={`/movies/${imdbID}`}>
                        <img src={Poster} className="p-4" />
                    </Link>
                );
            })}
        </div>
    );
}

export default MovieTable;