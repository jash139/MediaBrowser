import { GET_NOW_PLAYING_MOVIES } from "../../actions/types";

const initialState = [];

function getNowPlayingMovies(state = initialState, action) {
    switch (action.type) {
        case GET_NOW_PLAYING_MOVIES:
            const results = action.payload.data.results;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getNowPlayingMovies;