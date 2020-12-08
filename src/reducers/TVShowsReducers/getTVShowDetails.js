import { GET_TVSHOW_DETAILS } from "../../actions/types";

const initialState = {};

function getTVShowDetails(state = initialState, action) {
    switch (action.type) {
        case GET_TVSHOW_DETAILS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getTVShowDetails;