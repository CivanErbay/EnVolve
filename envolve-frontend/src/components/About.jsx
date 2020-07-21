import {Box} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#F7F7F7",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    headline: {
        fontFamily: "Modak",
        fontSize: "4.5em",
        padding: "1em 1em 0.5em 1em"
    }
}))

export const About = () => {

    const classes = useStyles();

    return (

        <Box pb={2} className={classes.about}>
            <Typography className={classes.headline}>About</Typography>

            <Box px={3} py={4} m={5} boxShadow={3} style={{maxWidth: "600px", backgroundColor: "#3AD19B"}}>
                <img style={{height: "25vh"}} src="./images/twoPersons.png" alt=""/>
                <Typography style={{ textAlign: "left", padding: "1em", fontSize:"1rem", lineHeight:"1.75"}}><span style={{fontFamily:"Modak", fontSize:"1.5em", lineHeight:".75"}}>EnVolve </span> is an app to <b>improve communication between students and their teachers </b>.
                    <br /> The approach is to
                establish a <b>continuous student-side feedback loop</b> to allow students to share their interests, ideas,
                wishes, criticisms and so on.
                <br />
                 Based on this information, the teacher can <b> design lessons in the interest
                        of the students </b>, thereby increasing their motivation to learn and ultimately improving the quality of
                learning.</Typography>
            </Box>

        </Box>

    )

}