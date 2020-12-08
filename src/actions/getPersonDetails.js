import axios from "axios";
import { GET_PERSON_DETAILS } from "./types";

const personDetails = payload => ({
    type: GET_PERSON_DETAILS,
    payload
});

const getPersonDetails = (Id) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/person/${Id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(details => dispatch(personDetails(details)))
            .catch(error => console.log(error));
    }
}

export default getPersonDetails;