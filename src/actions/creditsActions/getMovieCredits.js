import axios from "axios";
import { GET_MOVIE_CREDITS } from "../types";

const movieCredits = payload => ({
    type: GET_MOVIE_CREDITS,
    payload
});

const getMovieCredits = (movieId) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(credits => dispatch(movieCredits(credits)))
            .catch(error => console.log(error));
    }
}

export default getMovieCredits;