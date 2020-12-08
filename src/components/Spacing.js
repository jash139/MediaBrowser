import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        height: "5rem",
        width: "100%",
    },
}));

function Spacing() {
    const classes = useStyles();
    return (
        <div className={classes.root} />
    );
}

export default Spacing;