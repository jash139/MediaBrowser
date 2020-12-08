import { GET_TV_CREDITS } from "../../actions/types";

const initialState = {};

function getTVCredits(state = initialState, action) {
    switch (action.type) {
        case GET_TV_CREDITS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getTVCredits;