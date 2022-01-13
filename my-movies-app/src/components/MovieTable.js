import MovieHeader from "./MovieHeader";
import MovieRow from "./MovieRow";

const MovieTable = props => {
    const {movies} = props;
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movies.map(({Poster, imdbID}) => {
               return (
                    <img 
                        key={imdbID} 
                        src={Poster} 
                        className="p-4" 
                        onClick={() => console.log(imdbID)}
                    />
                );
            })}
        </div>
    );
}

export default MovieTable;