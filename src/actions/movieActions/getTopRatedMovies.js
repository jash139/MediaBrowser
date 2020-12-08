import axios from "axios";
import { GET_TOP_RATED_MOVIES } from "../types";

const topRatedMoviesList = payload => ({
    type: GET_TOP_RATED_MOVIES,
    payload
});

const getTopRatedMovies = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(topRatedMovies => dispatch(topRatedMoviesList(topRatedMovies)))
            .catch(error => console.log(error));
    }
}

export default getTopRatedMovies;