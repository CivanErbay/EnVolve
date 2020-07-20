import React, {useContext} from "react";
import LogoutButton from "../components/LogoutButton";
import {UserStateContext} from "../context/UserContext";
import SchoolClasses from "../components/SchoolClasses";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
    newFont : {
        fontFamily: "Rowdies",
        fontWeight: "300"
    },
    whiteWrapper: {
        backgroundColor: "white",
        width: "75%",
        borderRadius: "10px"
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
}));


export default function Overview () {

    const userState = useContext(UserStateContext)
    const classes = useStyles();
    return (
        <Box className={classes.center}>
        <Box mt={4} boxShadow={2} className={classNames (classes.newFont, classes.whiteWrapper)}>
        <h2>Hello {userState.userData.firstname}</h2>
            <SchoolClasses/>
        </Box>
            <Box p={2}>
    <LogoutButton/>
            </Box>
    </Box>
    )
}