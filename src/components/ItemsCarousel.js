import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { connect } from "react-redux";

import MediaDetailsCard from "./MediaDetailsCard";

import getPopularMovies from "../actions/movieActions/getPopularMovies";
import getUpcomingMovies from "../actions/movieActions/getUpcomingMovies";
import getNowPlayingMovies from "../actions/movieActions/getNowPlayingMovies";
import getTopRatedMovies from "../actions/movieActions/getTopRatedMovies";

import getAiringTodayTVShows from "../actions/TVActions/getAiringTodayTVShows";
import getPopularTVShows from "../actions/TVActions/getPopularTVShows";
import getTopRatedTVShows from "../actions/TVActions/getTopRatedTVShows";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "0",
        justifyContent: "space-around",
        overflow: "hidden",
        // backgroundColor: theme.palette.background.paper,
        // width: "80%",
        margin: "auto",
        padding: "1rem",
    },
    gridList: {
        flexWrap: 'nowrap',
        padding: "0",
        margin: "0",
        overflowY: "hidden",
        transform: "translateZ(0)",
        "&::-webkit-scrollbar": {
            display: "none",
            width: "1px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#4B97C5",
            borderRadius: "1rem",
        }
    },
}));

function ItemsCarousel(props) {
    const classes = useStyles();
    let mediaList = [];

    useEffect(() => {
        props.getUpcomingMovies();
        props.getPopularMovies();
        props.getNowPlayingMovies();
        props.getTopRatedMovies();

        props.getAiringTodayTVShows();
        props.getPopularTVShows();
        props.getTopRatedTVShows();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (props.mediaType.type === "MOVIE") {
        switch (props.type) {
            case "Upcoming":
                mediaList = props.upcomingMovies;
                break;
            case "Popular":
                mediaList = props.popularMovies;
                break;
            case "Now Playing":
                mediaList = props.nowPlayingMovies;
                break;
            case "Top Rated":
                mediaList = props.topRatedMovies;
                break;
            default:
                break;
        }
    } else {
        switch (props.type) {
            case "Airing Today":
                mediaList = props.airingTodayTVShows;
                break;
            case "Popular":
                mediaList = props.popularTVShows;
                break;
            case "Top Rated":
                mediaList = props.topRatedTVShows;
                break;
            default:
                break;
        }
    }

    function imageUrlString(posterPath) {
        const coverUrl = "https://image.tmdb.org/t/p/w500" + posterPath;
        return coverUrl;
    }

    const mediaCards = mediaList.map(media =>
        <MediaDetailsCard
            key={media.id}
            id={media.id}
            coverUrl={imageUrlString(media.poster_path)}
            title={props.mediaType.type === "MOVIE" ? media.title : media.name}
            genre={media.genre_ids}
            rating={media.vote_average}
            type={props.mediaType.type}
        />
    );
    return (
        <React.Fragment>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {mediaCards}
                </GridList>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    mediaType: state.setMediaType,

    popularMovies: state.getPopularMovies,
    upcomingMovies: state.getUpcomingMovies,
    nowPlayingMovies: state.getNowPlayingMovies,
    topRatedMovies: state.getTopRatedMovies,

    popularTVShows: state.getPopularTVShows,
    topRatedTVShows: state.getTopRatedTVShows,
    airingTodayTVShows: state.getAiringTodayTVShows
});

const mapDispatchToProps = {
    getPopularMovies,
    getUpcomingMovies,
    getNowPlayingMovies,
    getTopRatedMovies,

    getPopularTVShows,
    getTopRatedTVShows,
    getAiringTodayTVShows
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCarousel);