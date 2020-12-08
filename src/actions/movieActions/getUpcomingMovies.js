import axios from "axios";
import { GET_UPCOMING_MOVIES } from "../types";

const upcomingMoviesList = payload => ({
    type: GET_UPCOMING_MOVIES,
    payload
});

const getUpcomingMovies = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(upcomingMovies => dispatch(upcomingMoviesList(upcomingMovies)))
            .catch(error => console.log(error));
    }
}

export default getUpcomingMovies;