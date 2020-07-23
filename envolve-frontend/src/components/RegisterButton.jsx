import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({


    buttonStyle : {
        textTransform: 'none',
        background: "rgba(57,164,209)",
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px"
    },
    link: {
        textTransform: "none",
        textDecoration: 'none',
        color: "white",

    }
}))


export const RegisterButton = () => {

    const classes = useStyles()

    return (
        <Box>
            <Typography style={{fontWeight: "bold"}}>Not yet registered?</Typography>
            <Box mt={2} boxShadow={2} p={1} className={classes.buttonStyle}>
                <Link className={classes.link} to="/register">Create Account</Link>
            </Box>
        </Box>
    )
}