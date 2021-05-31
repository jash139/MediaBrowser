import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Heading from "./Heading";
import Spacing from "./Spacing";
import Divider from "./Divider";
import MediaDetailsCard from "./MediaDetailsCard";
import LoadingScreen from "./Loading/LoadingScreen";

import getSearchResults from "../actions/searchActions/getSearchResults";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "80%",
    },
    gridContainer: {
        flexGrow: 1,
    },
}));

function SearchResults(props) {
    const classes = useStyles();
    let searchResults = [];

    useEffect(() => {
        props.getSearchResults(props.match.params.query);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const query = props.match.params.query;
    if (props.searchResults) {
        searchResults = props.searchResults;
    }

    function imageUrlString(posterPath) {
        const coverUrl = "https://image.tmdb.org/t/p/w500" + posterPath;
        return coverUrl;
    }

    return (
        <React.Fragment>
            <LoadingScreen />
            <div className={classes.root}>

                <Spacing />
                <Heading content={`Search Results for ${query}`} />
                <Spacing />
                <Grid container className={classes.gridContainer} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {
                                searchResults.map(media =>
                                    <Grid key={media.id} item>
                                        <MediaDetailsCard
                                            id={media.id}
                                            coverUrl={imageUrlString(media.media_type === "person" ? media.profile_path : media.poster_path)}
                                            title={media.media_type === "movie" ? media.title : media.name}
                                            rating={media.vote_average}
                                            type={(media.media_type).toUpperCase()}
                                        />
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Spacing />
                <Divider />
                <Spacing />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    searchResults: state.getSearchResults
});

export default connect(mapStateToProps, { getSearchResults })(SearchResults);