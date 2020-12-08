import axios from "axios";
import { GET_TOP_RATED_TVSHOWS } from "../types";

const topRatedTVShowsList = payload => ({
    type: GET_TOP_RATED_TVSHOWS,
    payload
});

const getTopRatedTVShows = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(topRatedTVShows => dispatch(topRatedTVShowsList(topRatedTVShows)))
            .catch(error => console.log(error));
    }
}

export default getTopRatedTVShows;