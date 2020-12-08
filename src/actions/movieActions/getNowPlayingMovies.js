import axios from "axios";
import { GET_NOW_PLAYING_MOVIES } from "../types";

const nowPlayingMoviesList = payload => ({
    type: GET_NOW_PLAYING_MOVIES,
    payload
});

const getNowPlayingMovies = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(nowPlayingMovies => dispatch(nowPlayingMoviesList(nowPlayingMovies)))
            .catch(error => console.log(error));
    }
}

export default getNowPlayingMovies;