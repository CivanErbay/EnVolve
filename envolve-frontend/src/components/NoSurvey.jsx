import React from 'react';
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import {Box} from "@material-ui/core";
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

export default function NoSurvey() {

    const classes = useStyles();

    return (

        <Box className={classes.center} mt={6}>
            <DiagonalWrapper2 style={{fontSize: "2em", padding:"1.5em 0.5em"}}>
                <Typography style={{fontSize: "1.4em", fontWeight: "bold"}}>See you soon!</Typography>
                <Typography>It looks like there's currently no survey for you</Typography>

            </DiagonalWrapper2>
            <Box mt={5}> <Typography style={{color: "white", fontSize: "0.75em"}}>You can close this window
                now</Typography></Box>
        </Box>


    )
}