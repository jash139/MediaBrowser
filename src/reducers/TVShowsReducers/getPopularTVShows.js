import { GET_POPULAR_TVSHOWS } from "../../actions/types";

const initialState = [];

function getPopularTVShows(state = initialState, action) {
    switch (action.type) {
        case GET_POPULAR_TVSHOWS:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getPopularTVShows;