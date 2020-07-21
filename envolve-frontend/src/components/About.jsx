import {Box} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#F7F7F7"
    },
    headline: {
        fontFamily: "Modak",
        fontSize: "2.5em",
        padding: "1.5em 1.5em 0.5em 1.5em"
    }
}))

export const About = () => {

    const classes = useStyles();

    return (

        <Box className={classes.about}>
            <Typography className={classes.headline}>About</Typography>
            <img style={{height: "20vh"}} src="./images/twoPersons.png" alt=""/>
            <Box px={5} py={4}>
                <Typography style={{textAlign: "justify", textJustify: "inter-word"}}><b>EnVolve </b> is an app to <b>improve communication between students and their teachers </b>.
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