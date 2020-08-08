import {Box, useMediaQuery} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    about: {
        backgroundImage: `url(${"./images/greenback3.svg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    aboutSmall: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    headline: {
        fontSize: "4.5em",
        color: "#F7F7F7"

    },
    textTypo: {
        textAlign: "left",
        padding: "1em",
        fontSize:"1rem",
        lineHeight:"1.75",
      /*  background: "rgba(247, 247, 247, .7)"*/
    }
}))

export const About = () => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (

        <><Box pb={2}  className={ matches ? classes.aboutSmall : classes.about} >

                <Typography className={classes.headline}>About</Typography>

                <Box px={3} py={4} m={5} boxShadow={3} style={{maxWidth: "600px", backgroundColor: "#F7F7F7"}}>
                    <img style={{height: "25vh"}} src="./images/twoPersons.png" alt=""/>
                    <Typography className={classes.textTypo}><span style={{letterSpacing: "-2.25px", fontSize:"1.5em", lineHeight:".75", fontWeight: "bold"}}>Envolve </span> is an app to <b>improve communication between students and their teachers </b>.
                        <br /> The approach is to
                        establish a <b>continuous student-side feedback loop</b> to allow students to share their interests, ideas,
                        wishes, criticisms and so on.
                        <br />
                        Based on this information, the teacher can <b> design lessons in the interest
                            of the students </b>, thereby increasing their motivation to learn and ultimately improving the quality of
                        learning.</Typography>
                </Box>

            </Box>
            </>


    )

}