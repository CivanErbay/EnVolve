import {Link} from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    newFont: {
        fontFamily: 'Rowdies'
    },
    image: {
        height: "25vh"
    },
    bg: {
        backgroundColor: "#F7F7F7"
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <Box pt={4} className={classNames(classes.newFont, classes.bg)}>
        <div><Link className={classes.link} to="/">
            <img className={classes.image} src="./envolveLogo.svg" alt=""/>
        </Link>
        </div>
        </Box>
    )
}