import { GET_MOVIE_CREDITS } from "../../actions/types";

const initialState = {};

function getMovieCredits(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_CREDITS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getMovieCredits;