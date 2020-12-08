import { combineReducers } from "redux";

import getPopularMovies from "../reducers/movieReducers/getPopularMovies";
import getUpcomingMovies from "../reducers/movieReducers/getUpcomingMovies";
import getTopRatedMovies from "../reducers/movieReducers/getTopRatedMovies";
import getNowPlayingMovies from "../reducers/movieReducers/getNowPlayingMovies";
import getTrendingMovies from "../reducers/movieReducers/getTrendingMovies";
import getMovieDetails from "../reducers/movieReducers/getMovieDetails";

import getMovieCredits from "../reducers/creditsReducers/getMovieCredits";
import getTVCredits from "../reducers/creditsReducers/getTVCredits";

import getSearchResults from "../reducers/searchReducers/getSearchResults";

import getPopularTVShows from "../reducers/TVShowsReducers/getPopularTVShows";
import getAiringTodayTVShows from "../reducers/TVShowsReducers/getAiringTodayTVShows";
import getTopRatedTVShows from "../reducers/TVShowsReducers/getTopRatedTVShows";
import getTrendingTVShows from "../reducers/TVShowsReducers/getTrendingTVShows";
import getTVShowDetails from "../reducers/TVShowsReducers/getTVShowDetails";

import setMediaType from "../reducers/setMediaType";

import getPersonDetails from "../reducers/getPersonDetails";

const rootReducer = combineReducers({
    getPopularMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getTrendingMovies,
    getMovieDetails,

    getMovieCredits,
    getTVCredits,

    getSearchResults,

    getPopularTVShows,
    getAiringTodayTVShows,
    getTopRatedTVShows,
    getTrendingTVShows,
    getTVShowDetails,

    setMediaType,

    getPersonDetails
});

export default rootReducer;