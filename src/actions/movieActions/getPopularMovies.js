import axios from "axios";
import { GET_POPULAR_MOVIES } from "../types";

const popularMoviesList = payload => ({
    type: GET_POPULAR_MOVIES,
    payload
});

const getPopularMovies = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(popularMovies => dispatch(popularMoviesList(popularMovies)))
            .catch(error => console.log(error));
    }
}

export default getPopularMovies;