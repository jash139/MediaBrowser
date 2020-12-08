import axios from "axios";
import { GET_MOVIE_DETAILS } from "../types";

const movieDetails = payload => ({
    type: GET_MOVIE_DETAILS,
    payload
});

const getMovieDetails = (movieId) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(movieData => dispatch(movieDetails(movieData)))
            .catch(error => console.log(error));
    }
}

export default getMovieDetails;