import { SET_MEDIA_TYPE_MOVIE, SET_MEDIA_TYPE_TV } from "./types";

const setMediaType = type => ({
    type: type === "TV" ? SET_MEDIA_TYPE_TV : SET_MEDIA_TYPE_MOVIE
});

export default setMediaType;