import { GET_POPULAR_MOVIES } from "../../actions/types";

const initialState = [];

function getPopularMovies(state = initialState, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getPopularMovies;