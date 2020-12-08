import { GET_TRENDING_TVSHOWS } from "../../actions/types";

const initialState = [];

function getTrendingTVShows(state = initialState, action) {
    switch (action.type) {
        case GET_TRENDING_TVSHOWS:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getTrendingTVShows;