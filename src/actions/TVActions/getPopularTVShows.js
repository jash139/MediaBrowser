import axios from "axios";
import { GET_POPULAR_TVSHOWS } from "../types";

const popularTVShowsList = payload => ({
    type: GET_POPULAR_TVSHOWS,
    payload
});

const getPopularTVShows = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(popularTVShows => dispatch(popularTVShowsList(popularTVShows)))
            .catch(error => console.log(error));
    }
}

export default getPopularTVShows;