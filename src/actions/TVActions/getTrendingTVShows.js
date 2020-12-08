import axios from "axios";
import { GET_TRENDING_TVSHOWS } from "../types";

const trendingTVShowsList = payload => ({
    type: GET_TRENDING_TVSHOWS,
    payload
});

const getTrendingTVShows = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(trendingTVShows => dispatch(trendingTVShowsList(trendingTVShows)))
            .catch(error => console.log(error));
    }
}

export default getTrendingTVShows;