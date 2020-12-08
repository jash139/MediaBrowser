import axios from "axios";
import { GET_AIRING_TODAY_TVSHOWS } from "../types";

const airingTodayTVShowsList = payload => ({
    type: GET_AIRING_TODAY_TVSHOWS,
    payload
});

const getAiringTodayTVShows = () => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(airingTodayTVShows => dispatch(airingTodayTVShowsList(airingTodayTVShows)))
            .catch(error => console.log(error));
    }
}

export default getAiringTodayTVShows;