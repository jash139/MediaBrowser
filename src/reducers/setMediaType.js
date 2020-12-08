import { SET_MEDIA_TYPE_MOVIE, SET_MEDIA_TYPE_TV } from "../actions/types";

const initialState = {
    type: "MOVIE"
};

function setMediaType(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA_TYPE_MOVIE:
            return {
                type: "MOVIE"
            };
        case SET_MEDIA_TYPE_TV:
            return {
                type: "TV"
            };
        default:
            return state;
    }
}

export default setMediaType;