import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    smallViewport: {
        flexGrow: 1,
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    largeViewport: {
        flexGrow: 1,
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(2, 2)",
    },
    cover: {
        borderRadius: "0.5rem",
        height: 160,
        margin: "1rem",
        width: 110,
    },
    title: {
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    genre: {
        color: "white",
        fontSize: "0.8rem",
    },
    rating: {
        color: "white",
        fontSize: "0.6rem",
    },
    details: {
        float: "right",
        padding: "1rem",
    },
}));

function MediaCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const largeViewport = useMediaQuery(theme.breakpoints.up("sm"));

    function posterUrlString(posterPath) {
        const coverUrl = "https://image.tmdb.org/t/p/w500" + posterPath;
        return coverUrl;
    }

    const mediaDetails = props.mediaType === "MOVIE" ? props.movieDetails : props.TVShowDetails;

    return (
        <Grid container className={largeViewport ? classes.largeViewport : classes.smallViewport} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item>
                        <img
                            className={classes.cover}
                            src={posterUrlString(mediaDetails.poster_path)}
                            title={props.mediaType === "MOVIE" ? mediaDetails.title : mediaDetails.name}
                            alt="cover"
                        />
                    </Grid>
                    <Grid item>
                        <div className={classes.details}>
                            <p className={classes.title}>{props.mediaType === "MOVIE" ? mediaDetails.title : mediaDetails.name}</p>
                            <p className={classes.rating}>{mediaDetails.vote_average + " Rating"}</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => ({
    movieDetails: state.getMovieDetails,
    TVShowDetails: state.getTVShowDetails
});

export default connect(mapStateToProps)(MediaCard);