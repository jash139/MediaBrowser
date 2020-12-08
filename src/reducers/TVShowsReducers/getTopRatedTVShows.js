import { GET_TOP_RATED_TVSHOWS } from "../../actions/types";

const initialState = [];

function getTopRatedTVShows(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_RATED_TVSHOWS:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getTopRatedTVShows;