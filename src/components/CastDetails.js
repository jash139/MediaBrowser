import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import getPersonDetails from "../actions/getPersonDetails";
import Heading from "./Heading";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        flexGrow: 1,
        paddingTop: "10%",
        overflow: "hidden",
        margin: "auto",
        width: "95%",
    },
    coverSmall: {
        borderRadius: "0.5rem",
        height: 200,
        width: 135,
    },
    coverLarge: {
        borderRadius: "0.5rem",
        height: 300,
        width: 210,
    },
    biography: {
        margin: "1rem",
    },
    name: {
        fontSize: "1.5rem",
    },
    profileSection: {
        alignContent: "center",
        textAlign: "center",
        padding: "2rem",
    },
    biographySection: {
        padding: "1rem",
    },
}));

function CastDetails(props) {

    const classes = useStyles();
    const theme = useTheme();
    const largeViewport = useMediaQuery(theme.breakpoints.up("sm"));

    useEffect(() => {
        props.getPersonDetails(props.match.params.id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const personDetails = props.personDetails;

    function posterUrlString(profilePath) {
        const coverUrl = "https://image.tmdb.org/t/p/w500" + profilePath;
        return coverUrl;
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className={classes.profileSection}>
                        <img className={largeViewport ? classes.coverLarge : classes.coverSmall} src={posterUrlString(personDetails.profile_path)} alt="Profile" />
                        <h2 className={classes.name}>{personDetails.name}</h2>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className={classes.biographySection}>
                        <Heading content="Biography" />
                        <p className={classes.biography}>{personDetails.biography}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({
    personDetails: state.getPersonDetails
});

export default connect(mapStateToProps, { getPersonDetails })(CastDetails);