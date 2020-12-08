import { GET_MOVIE_DETAILS } from "../../actions/types";

const initialState = {};

function getMovieDetails(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getMovieDetails;