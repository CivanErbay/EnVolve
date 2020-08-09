import Box from "@material-ui/core/Box";
import classNames from "classnames";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    wrapperMobile: {
        backgroundColor: "#F7F7F7",
        width: "300px",
        background: `url(${"/images/steps.svg"})`,
        /*     backgroundSize: "cover",*/
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0px",
        height: "100%",
    },
    wrapperDesktop: {
        backgroundColor: "#F7F7F7",
        width: "80%",
        maxWidth: "800px",
        borderRadius: "10px",
        background: `url(${"/images/stepsBig.svg"})`,
        /*     backgroundSize: "cover",*/
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0px",
        height: "100%",
    }
}));


export default function StepWrapper ({children, style}){

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:800px)');

    return (

        <Box mt={4} p={3} style={style} boxShadow={2} className={classNames ( matches ?  classes.wrapperDesktop : classes.wrapperMobile)}>

            {children}
        </Box>
    )

}