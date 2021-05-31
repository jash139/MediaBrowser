import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import MediaCard from "./MediaCard";
import CastCarousel from "./CastCarousel";
import Heading from "./Heading";
import Spacing from "./Spacing";
import Divider from "./Divider";
import Loading from "./Loading/LoadingScreen";

import getMovieDetails from "../actions/movieActions/getMovieDetails";
import getTVShowDetails from "../actions/TVActions/getTVShowDetails";

const useStyles = makeStyles(() => ({
    header: {
        height: "50%",
        overflowX: "hidden",
        position: "relative",
    },
    headerFit: {
        height: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        width: "100%",
    },
    backdropFit: {
        height: "100vh",
        objectFit: "cover",
        opacity: "0.2",
        width: "100%",
    },
    backdrop: {
        overflow: "hidden",
        display: "flex",
        width: "100%",
        objectFit: "cover",
        opacity: "0.2",
    },
    container: {
        margin: "auto",
        padding: "2rem 0",
        width: "70%",
    },
    overview: {
        color: "white",
        fontSize: "1.2rem",
        paddingLeft: "1rem",
    }
}));

function MediaDetailsPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const mediaType = props.match.params.mediaType;
    const mediaId = props.match.params.mediaId;
    let mediaDetails;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (props.match.params.mediaType === "MOVIE") {
            props.getMovieDetails(props.match.params.mediaId);
        } else {
            props.getTVShowDetails(props.match.params.mediaId);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    if (mediaType === "MOVIE") {
        mediaDetails = props.movieDetails;
    } else {
        mediaDetails = props.TVShowDetails;
    }

    function backdropUrlString(backdropPath) {
        const backdropUrl = "https://image.tmdb.org/t/p/original" + backdropPath;
        return backdropUrl;
    }

    return (
        <React.Fragment>
            <Loading />
            <div className={matches ? classes.headerFit : classes.header}>
                <img className={matches ? classes.backdropFit : classes.backdrop} src={backdropUrlString(mediaDetails.backdrop_path)} alt="backdrop" />
                <MediaCard mediaType={mediaType} />
            </div>
            <div className={classes.container}>
                <Spacing />
                <Heading content="Summary" />
                <p className={classes.overview}>{mediaDetails.overview}</p>
                <Spacing />
                <Divider />
                <Spacing />
                <Heading content="Cast" />
                <CastCarousel mediaId={mediaId} mediaType={mediaType} />
                <Spacing />
                <Divider />
                <Spacing />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    movieDetails: state.getMovieDetails,
    TVShowDetails: state.getTVShowDetails
});

export default connect(mapStateToProps, { getMovieDetails, getTVShowDetails })(MediaDetailsPage);