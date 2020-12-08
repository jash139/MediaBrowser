import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import NavBar from "./NavBar";
import PosterCarousel from "./PosterCarousel";
import ItemsCarousel from "./ItemsCarousel";
import Divider from "./Divider";
import Heading from "./Heading";
import Spacing from "./Spacing";
import LoadingScreen from "./Loading/LoadingScreen";
import MediaButton from "./MediaButton";

const useStyles = makeStyles(() => ({
    root: {
        position: "relative",
        backgroundColor: "#000000",
    },
    container: {
        width: "80%",
        margin: "auto",
    },
}));

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const classes = useStyles();
    let mediaContainer;

    if (props.mediaType.type === "MOVIE") {
        mediaContainer =
            <React.Fragment>
                <Heading content="Upcoming" />
                <ItemsCarousel type="Upcoming" />
                <Divider />
                <Spacing />
                <Heading content="Popular" />
                <ItemsCarousel type="Popular" />
                <Divider />
                <Spacing />
                <Heading content="Now Playing" />
                <ItemsCarousel type="Now Playing" />
                <Divider />
                <Spacing />
                <Heading content="Top Rated" />
                <ItemsCarousel type="Top Rated" />
                <Divider />
            </React.Fragment>;
    } else {
        mediaContainer =
            <React.Fragment>
                <Heading content="Airing Today" />
                <ItemsCarousel type="Airing Today" />
                <Divider />
                <Spacing />
                <Heading content="Popular" />
                <ItemsCarousel type="Popular" />
                <Divider />
                <Spacing />
                <Heading content="Top Rated" />
                <ItemsCarousel type="Top Rated" />
                <Divider />
            </React.Fragment>;
    }

    return (
        <React.Fragment>
            <LoadingScreen />
            <div className={classes.root}>
                <NavBar />
                <PosterCarousel />
                <div className={classes.container}>
                    <Spacing />
                    <MediaButton />
                    <Spacing />
                    {mediaContainer}
                    <Spacing />
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    mediaType: state.setMediaType
});

export default connect(mapStateToProps)(Home);