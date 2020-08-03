import React from 'react';
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import {Box} from "@material-ui/core";
import DiagonalWrapper from "./wrapper/DiagonalWrapper";
import Typography from "@material-ui/core/Typography";
import DiagonalWrapper2 from "./wrapper/Diagonal2Wrapper";

const useStyles = makeStyles({
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
})

export default function ThankYou() {

    const classes = useStyles();

    return (

        <Box className={classes.center}>
            <DiagonalWrapper2 style={{fontSize: "2em"}}>

                <Typography style={{fontSize: "1.4em", fontWeight: "bold"}}>See you soon!</Typography>
                <Typography>Thank you for completing the survey</Typography>
            </DiagonalWrapper2>
            <Box mt={5}> <Typography style={{color: "white", fontSize: "0.75em"}}>You can close this window
                now</Typography></Box>
        </Box>

    )
}