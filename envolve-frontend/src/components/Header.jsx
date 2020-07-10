import {Link} from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '2em'
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <Box mt={2}>
        <div><Link className={classes.link} to="/">
            <h1 style={{margin: "0"}}>EnVolve</h1>
        </Link>
            <h5 style={{margin: "0"}}>Enhance education, involve pupils</h5>
        </div>
        </Box>
    )
}