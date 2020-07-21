import {Link} from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    image: {
        width: "100%",
        maxWidth: "550px"
    },

}))

export default function Header() {
    const classes = useStyles();
    return (
        <Box p={4}>
        <div><Link className={classes.link} to="/">
            <img className={classes.image} src="./images/envolveLogoNew.svg" alt=""/>
        </Link>
        </div>
        </Box>
    )
}