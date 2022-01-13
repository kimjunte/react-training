import MovieTable from "./MovieTable";
import MovieCounter from "./MovieCounter";
import MovieReviewForm from "./MovieReviewFrom";
import React from "react";
import MovieForm from "./MovieForm";
import MovieSearchForm from "./MovieSearchForm";

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
            searchTerm: '',
            movies: [],
        }

        // this.handleNewReview = this.handleNewReview.bind(this);
        this.handleNewMovie = this.handleNewMovie.bind(this);
        this.handleNewSearchTerm = this.handleNewSearchTerm.bind(this);
    }
  
    // handleNewReview(newReview) {
    //     this.setState({movies: this.state.movies.map(movie => {
    //         if (movie.title == 'Wayne\'s World') {
    //             return {...movie, reviews: [...movie.reviews, newReview]};
    //         }
    //         return movie;
    //     })});
    // }

    componentDidMount() {
    }

    componentDidUpdate(prevProp, prevState) {
        // take a look at axious - and alternative to fetch
        // if the search term is truthy and it is not the same as the previous search term.
        console.log(prevState);
        console.log("fetch data");
        if (this.state.searchTerm && this.state.searchTerm != prevState.searchTerm) {
            fetch(`http://www.omdbapi.com/?apikey=fa9f0d49&s=${this.state.searchTerm}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search}))
                .catch(error => console.log(error)); // <!-- we could assign the error to some state to render
        }
    }

    handleNewMovie (data) {
        this.setState({movies: [...this.state.movies, data]})
    }

    handleNewSearchTerm(newSearchTerm) {

        this.setState({searchTerm: newSearchTerm})
    }

    render () {
        return (
            <>
                <MovieCounter movies={this.state.movies}/>
                <MovieSearchForm onNewSearchTerm={this.handleNewSearchTerm}/>
                {/* !! => converts any value to a boolean; e.g. 0 to false */}
                {!!this.state.movies.length && <MovieTable movies={this.state.movies}/>}
                {/* <MovieReviewForm onNewReview={this.handleNewReview}/> */}
                <MovieForm addMovieHandler={this.handleNewMovie}/>    
            </>
        );
    }
}

export default Movies;