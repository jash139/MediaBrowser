import axios from "axios";
import { GET_TV_CREDITS } from "../types";

const TVCredits = payload => ({
    type: GET_TV_CREDITS,
    payload
});

const getTVCredits = (TVId) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(credits => dispatch(TVCredits(credits)))
            .catch(error => console.log(error));
    }
}

export default getTVCredits;