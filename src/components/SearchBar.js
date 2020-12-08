import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    search: {
        position: "relative",
        borderRadius: "2rem",
        margin: "0.5rem 0",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    inputRoot: {
        color: "white",
        padding: "0.5rem",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "25ch",
            },
        },
    },
}));

function SearchBar() {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const history = useHistory();

    function onInputChange(event) {
        const { value } = event.target;
        setValue(value);
    }

    function onEnterClick() {
        history.push(`/search/${value}`);
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                value={value}
                onChange={(event) => onInputChange(event)}
                onKeyPress={(ev) => {
                    // console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                        onEnterClick();
                        ev.preventDefault();
                    }
                }}
            />
        </div>
    );
}

export default SearchBar;
