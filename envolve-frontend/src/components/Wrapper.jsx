import Box from "@material-ui/core/Box";
import classNames from "classnames";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    newFont : {
        fontFamily: "'Open Sans', sans-serif;",
        fontWeight: "800"
    },
    wrapper: {
        backgroundColor: "#F7F7F7",
        width: "75%",
        maxWidth: "800px",
        borderRadius: "10px"
    },
}));


export default function Wrapper ({children}){

    const classes = useStyles();


    return (

        <Box mt={4} p={4} boxShadow={2} className={classNames (classes.newFont, classes.wrapper)}>
            {children}
        </Box>
    )

}