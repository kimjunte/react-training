import MovieTable from "./MovieTable";
import MovieCounter from "./MovieCounter";
import MovieReviewForm from "./MovieReviewFrom";
import React from "react";
import MovieForm from "./MovieForm";

// TODO: change data information from http://www.omdbapi.com/ API

// HTTP request in javascript using fetch => 
// promise = fetch(http://www.omdbapi.com/?apikey=<API_KEY>&s=blues)
// promise.then(response => response.json()).then(data => console.log(data.Search));

/*
 * fetch('http://www.omdbapi.com/?apikey=fa9f0d49&s=blues').then(response => response.json()).then(data => console.log(data.Search));
 */
class Movies extends React.Component {
    constructor () {
        super();
        this.state = {
            movies: [],
        }

        this.handleNewReview = this.handleNewReview.bind(this);
        this.handleNewMovie = this.handleNewMovie.bind(this);
    }
  
    handleNewReview(newReview) {
        this.setState({movies: this.state.movies.map(movie => {
            if (movie.title == 'Wayne\'s World') {
                return {...movie, reviews: [...movie.reviews, newReview]};
            }
            return movie;
        })});
    }

    componentDidMount() {
        console.log("fetch data");
        fetch('http://www.omdbapi.com/?apikey=fa9f0d49&s=blues').then(response => response.json()).then(data => this.setState({movies: data.Search}));
    }

    handleNewMovie (data) {
        this.setState({movies: [...this.state.movies, data]})
    }

    render () {
        return (
            <>
                <MovieCounter movies={this.state.movies}/>
                <MovieTable movies={this.state.movies}/>
                {/* <MovieReviewForm onNewReview={this.handleNewReview}/> */}
                <MovieForm addMovieHandler={this.handleNewMovie}/>    
            </>
        );
    }
}

export default Movies;