import axios from "axios";
import { GET_SEARCH_RESULTS } from "../types";

const searchResults = payload => ({
    type: GET_SEARCH_RESULTS,
    payload
});

const getSearchResults = (query) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(data => dispatch(searchResults(data)))
            .catch(error => console.log(error));
    }
}

export default getSearchResults;