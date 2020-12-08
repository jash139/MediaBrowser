import { GET_UPCOMING_MOVIES } from "../../actions/types";

const initialState = [];

function getUpcomingMovies(state = initialState, action) {
    switch (action.type) {
        case GET_UPCOMING_MOVIES:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getUpcomingMovies;