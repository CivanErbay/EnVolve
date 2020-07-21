import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none',
        fontSize: '10px',
        padding: "0.4em"
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        maxWidth: "40px",
        width: "3vh"
    }

}));


export const AddClassButton = () => {

    const classes = useStyles();


    return (
        <Box mt={2} className={classes.center}>
            <Link className={classes.link} to="/creation" style={{display: "flex"}} >
                <img className={classes.image} src="./images/plus.svg" alt=""/>
                <Box p={1}>
                    <Typography style={{fontWeight: "800"}}>
                        Add Class
                    </Typography>
                </Box>
            </Link>
        </Box>

    )

}