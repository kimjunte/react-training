import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const {imdbID} = useParams();
    // const [movie, setMovie] = useState()

    // useEffect(()=> {
    //     // TODO: fetch the detail for the given movies
    // }, [imdbID])

    return (
        //  I would porbably have this SMART component render some other DUMB component
        <>
            <h3>Movie Detail</h3>
            <p>IMDB ID: {imdbID}</p>
        </>
    );
}

export default MovieDetail;