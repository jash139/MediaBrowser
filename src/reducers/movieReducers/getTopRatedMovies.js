import { GET_TOP_RATED_MOVIES } from "../../actions/types";

const initialState = [];

function getTopRatedMovies(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_RATED_MOVIES:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getTopRatedMovies;