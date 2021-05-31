import { GridList, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import MediaDetailsCard from "./MediaDetailsCard";

import getMovieCredits from "../actions/creditsActions/getMovieCredits";
import getTVCredits from "../actions/creditsActions/getTVCredits";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "0",
        justifyContent: "space-around",
        overflow: "hidden",
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

function CastCarousel(props) {
    const classes = useStyles();
    let castList = [];

    useEffect(() => {
        props.getMovieCredits(props.mediaId);
        props.getTVCredits(props.mediaId);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function imageUrlString(profilePath) {
        const coverUrl = "https://image.tmdb.org/t/p/w500" + profilePath;
        return coverUrl;
    }

    if (props.mediaType === "MOVIE" && props.movieCredits.cast) {
        castList = props.movieCredits.cast;
    } else if (props.mediaType === "TV" && props.TVCredits.cast) {
        castList = props.TVCredits.cast;
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {
                        castList.map(cast =>
                            <MediaDetailsCard
                                key={cast.id}
                                id={cast.id}
                                coverUrl={imageUrlString(cast.profile_path)}
                                title={cast.name}
                                type="PERSON"
                            />
                        )
                    }
                </GridList>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    movieCredits: state.getMovieCredits,
    TVCredits: state.getTVCredits
});

export default connect(mapStateToProps, { getMovieCredits, getTVCredits })(CastCarousel);