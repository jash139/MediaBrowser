import { GET_AIRING_TODAY_TVSHOWS } from "../../actions/types";

const initialState = [];

function getAiringTodayTVShows(state = initialState, action) {
    switch (action.type) {
        case GET_AIRING_TODAY_TVSHOWS:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getAiringTodayTVShows;