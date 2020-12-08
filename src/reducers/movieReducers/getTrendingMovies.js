import { GET_TRENDING_MOVIES } from "../../actions/types";

const initialState = [];

function getTrendingMovies(state = initialState, action) {
    switch (action.type) {
        case GET_TRENDING_MOVIES:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getTrendingMovies;