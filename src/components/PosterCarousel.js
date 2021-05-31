import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useMediaQuery } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import getTrendingMovies from "../actions/movieActions/getTrendingMovies";
import getTrendingTVShows from "../actions/TVActions/getTrendingTVShows";

import getGenreName from "../constants/getGenreName";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(() => ({
    poster: {
        position: "relative",
    },
    img: {
        overflow: "hidden",
        display: "flex",
        width: "100%",
        objectFit: "cover",
        opacity: "0.6",
    },
    fitImg: {
        overflow: "hidden",
        display: "flex",
        width: "100%",
        objectFit: "cover",
        opacity: "0.6",
        height: "100vh",
    },
    about: {
        position: "absolute",
        bottom: "2rem",
        left: "2rem",
        color: "white",
        padding: "1rem 2rem",
    },
    mobileAbout: {
        position: "absolute",
        bottom: "0.5rem",
        left: "0.5rem",
        color: "white",
        padding: "1rem 2rem",
    },
    trending: {
        fontSize: "1.5rem",
        lineHeight: "0.8",
        textTransform: "uppercase",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    detail: {
        fontSize: "1rem",
    },
}));

function PosterCarousel(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isLargeViewport = useMediaQuery(theme.breakpoints.up("md"));
    const [activeStep, setActiveStep] = React.useState(0);

    useEffect(() => {
        props.getTrendingMovies();
        props.getTrendingTVShows();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    function imageUrlString(backdropPath) {
        const backdropUrl = "https://image.tmdb.org/t/p/original" + backdropPath;
        return backdropUrl;
    }

    function createMediaDetails(genreId, rating) {
        let mediaDetails = getGenreName(genreId) + " | " + rating;
        return mediaDetails;
    }

    const trendingMedia = props.mediaType.type === "MOVIE" ? props.trendingMovies : props.trendingTVShows;

    const parallaxView = trendingMedia.map((media, index) => (
        <Link to={`/details/${props.mediaType.type}/${media.id}`} key={media.id}>
            <div className={classes.poster}>
                {Math.abs(activeStep - index) <= 2 ? (
                    <Parallax className={classes.fitImg} bgImage={imageUrlString(media.backdrop_path)} bgImageAlt="backdrop" strength={500} />
                ) : null}
                <div className={classes.about}>
                    <p className={classes.trending}>Trending</p>
                    <h1 className={classes.title}>
                        {props.mediaType.type === "MOVIE" ? media.title : media.name}
                    </h1>
                    <p className={classes.detail}>{createMediaDetails(media.genre_ids[0], media.vote_average)}</p>
                </div>
            </div>
        </Link>
    ));

    const imageView = trendingMedia.map((media, index) => (
        <Link to={`/details/${props.mediaType.type}/${media.id}`} key={media.id}>
            <div className={classes.poster}>
                {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={imageUrlString(media.backdrop_path)} alt={media.label} />
                ) : null}
                <div className={classes.mobileAbout}>
                    <p className={classes.trending}>Trending</p>
                    <h1 className={classes.title}>
                        {props.mediaType.type === "MOVIE" ? media.title : media.name}
                    </h1>
                    <p className={classes.detail}>{createMediaDetails(media.genre_ids[0], media.vote_average)}</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {isLargeViewport ? parallaxView : imageView}
        </AutoPlaySwipeableViews>
    );
}

const mapStateToProps = state => ({
    mediaType: state.setMediaType,
    trendingMovies: state.getTrendingMovies,
    trendingTVShows: state.getTrendingTVShows
});

export default connect(mapStateToProps, { getTrendingMovies, getTrendingTVShows })(PosterCarousel);
