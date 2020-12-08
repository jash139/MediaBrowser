import axios from "axios";
import { GET_TRENDING_MOVIES } from "../types";

const trendingMoviesList = payload => ({
    type: GET_TRENDING_MOVIES,
    payload
});

const getTrendingMovies = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(trendingMovies => dispatch(trendingMoviesList(trendingMovies)))
            .catch(error => console.log(error));
    }
}

export default getTrendingMovies;