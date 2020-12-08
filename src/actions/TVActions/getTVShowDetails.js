import axios from "axios";
import { GET_TVSHOW_DETAILS } from "../types";

const TVShowDetails = payload => ({
    type: GET_TVSHOW_DETAILS,
    payload
});

const getTVShowDetails = (TVId) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/tv/${TVId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(TVShowData => dispatch(TVShowDetails(TVShowData)))
            .catch(error => console.log(error));
    }
}

export default getTVShowDetails;