import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import StarRateIcon from "@material-ui/icons/StarRate";

import getGenreName from "../constants/getGenreName";

const useStyles = makeStyles(() => ({
    root: {
        opacity: "0.7",
        padding: "1rem 1rem 2rem 0",
        marginRight: "2rem",
        position: "relative",
        transitionDuration: "0.2s",
        width: 130,
        "&:hover": {
            cursor: "pointer",
            opacity: "1",
            transform: "scale(1.04) translate(0, -4px)",
        },
    },
    cover: {
        width: 130,
        height: 190,
        borderRadius: "0.5rem",
    },
    coverImage: {
        width: 130,
        height: 190,
        backgroundImage: "linear-gradient(135deg, #1F1170, #6F41FC, #1F1170)",
        borderRadius: "0.5rem",
    },
    ratingBanner: {
        backgroundColor: "black",
        color: "white",
        opacity: "0.8",
        position: "absolute",
        top: "2rem",
    },
    rating: {
        float: "right",
        margin: "0",
        marginTop: "0.2rem",
        padding: "0 0.5rem",
    },
    title: {
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    genre: {
        color: "white",
        fontSize: "0.8rem",
    }
}));

function MediaDetailsCard(props) {
    const classes = useStyles();

    function genreString() {
        const genre = props.genre;

        if (genre !== undefined) {
            let allGenreString = getGenreName(genre[0]);
            if (genre.length === 1) {
                return allGenreString;
            } else {
                let len = 2 <= genre.length ? 2 : genre.length;
                for (let i = 1; i < len; ++i) {
                    allGenreString += " / " + getGenreName(genre[i]);
                }
            }
            return allGenreString;
        }
    }

    const mediaCard =
        <Link to={`/details/${props.type}/${props.id}`} style={{ "textDecoration": "none" }}>
            <div className={classes.root}>
                <div className={classes.coverImage}>
                    <img
                        className={classes.cover}
                        src={props.coverUrl}
                        title={props.title}
                        alt="poster unavailable"
                    />
                </div>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.genre}>{genreString()}</p>
                {props.type !== "person" ? <div className={classes.ratingBanner}>
                    <StarRateIcon />
                    <p className={classes.rating}>{props.rating}</p>
                </div> : null}
            </div>
        </Link>;

    const profileCard =
        <Link to={`/${props.type}/${props.id}`} style={{ "textDecoration": "none" }}>
            <div className={classes.root}>
                <div className={classes.coverImage}>
                    <img
                        className={classes.cover}
                        src={props.coverUrl}
                        title={props.title}
                        alt="poster unavailable"
                    />
                </div>
                <p className={classes.title}>{props.title}</p>
            </div>
        </Link>;

    return (props.type !== "PERSON" ? mediaCard : profileCard);
}

const mapStateToProps = state => ({
    mediaType: state.setMediaType
});

export default connect(mapStateToProps)(MediaDetailsCard);