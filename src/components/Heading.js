import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    heading: {
        color: "white",
        fontFamily: "'Prompt', sans-serif;",
        fontSize: "1.5rem",
        letterSpacing: "0.5rem",
        textTransform: "uppercase",
        paddingLeft: "1rem",
    }
}));

function Heading(props) {
    //add props during actual use
    const classes = useStyles();
    return (
        <h1 className={classes.heading}>{props.content}</h1>
    );
}

export default Heading;