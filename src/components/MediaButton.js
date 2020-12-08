import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MovieIcon from "@material-ui/icons/Movie";
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { connect } from "react-redux";

import setMediaType from "../actions/setMediaType";

const useStyles = makeStyles(() => ({
    button: {
        border: "0.1rem solid #6F41FC",
        borderRadius: "2rem",
        color: "#6F41FC",
        fontSize: "1rem",
        "&:hover": {
            border: "0.1rem solid #6F41FC",
        },
        padding: "1rem",
        width: 180,
    },
    icon: {
        marginRight: "1rem",
    },
}));

function MediaButton(props) {
    const classes = useStyles();

    function showMovies() {
        console.log("show movies");
        props.setMediaType("MOVIE");
    }

    function showTVShows() {
        console.log("TV");
        props.setMediaType("TV");
    }

    return (
        <React.Fragment>
            <Grid container justify="center" spacing={10}>
                <Grid item>
                    <Button variant="outlined" className={classes.button} onClick={showMovies}>
                        <MovieIcon className={classes.icon} />
                            Movies
                        </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" className={classes.button} onClick={showTVShows}>
                        <LiveTvIcon className={classes.icon} />
                            TV Shows
                        </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { setMediaType })(MediaButton);