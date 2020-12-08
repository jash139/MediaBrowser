import { GET_PERSON_DETAILS } from "../actions/types";

const initialState = {};

function getPersonDetails(state = initialState, action) {
    switch (action.type) {
        case GET_PERSON_DETAILS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getPersonDetails;