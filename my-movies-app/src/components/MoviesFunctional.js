import MovieTable from "./MovieTable";
import MovieCounter from "./MovieCounter";
import MovieReviewForm from "./MovieReviewFrom";
import React from "react";
import MovieForm from "./MovieForm";
import MovieSearchForm from "./MovieSearchForm";
import {useState, useEffect} from 'react'

const MoviesFunctional = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        if (searchTerm) {
            fetch(`https://www.omdbapi.com/?apikey=fa9f0d49&s=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.Search) {
                        setMovies(data.Search)
                    }
                    else {
                        //TODO: Show message to user that nothing was found
                        console.log("SHOW MESSAGE TO USER");
                    }
                })
                .catch(error => console.log(error)); // <!-- we could assign the error to some state to render
        }
    }, [searchTerm]);


    const handleNewMovie = (data) => { 
        setMovies([...movies, data])
    }

    const handleNewSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    return (
        <>
            <MovieCounter movies={movies}/>
            <MovieSearchForm onNewSearchTerm={handleNewSearchTerm}/>
            {!!movies.length && <MovieTable movies={movies}/>}
        </>
    );
}

export default MoviesFunctional;