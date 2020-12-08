import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from "./SearchBar";
import CameraLogo from "./CameraLogo";

const useStyles = makeStyles(() => ({
    root: {
        position: "absolute",
        top: "0",
    },
    appbar: {
        background: "rgba(0, 0, 0, 0.7)",
        // alignItems: "center",
    },
    searchbar: {
        margin: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
}));


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function NavBar(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <CameraLogo />
                        <div className={classes.searchbar}>
                            <SearchBar />
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </div>
    );
}

export default NavBar;
