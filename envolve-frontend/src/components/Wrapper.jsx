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
        width: "350px",
        maxWidth: "800px",
        borderRadius: "10px"
    },
}));


export default function Wrapper ({children, style}){

    const classes = useStyles();


    return (

        <Box mt={4} p={3} style={style} boxShadow={2} className={classNames (classes.newFont, classes.wrapper)}>
            {children}
        </Box>
    )

}