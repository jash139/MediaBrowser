import { GET_SEARCH_RESULTS } from "../../actions/types";

const initialState = [];

function getSearchResults(state = initialState, action) {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getSearchResults;