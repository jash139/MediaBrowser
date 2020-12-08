import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    divider: {
        height: "0.1rem",
        borderRadius: "5px",
        backgroundImage: "linear-gradient(to right, #000000, #1F1170, #6F41FC, #1F1170, #000000)",
        opacity: "0.8",
    }
}));

function Divider() {
    const classes = useStyles();

    return (
        <div className={classes.divider} />
    );
}

export default Divider;