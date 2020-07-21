import React, {useContext} from "react";
import LogoutButton from "../components/LogoutButton";
import {UserStateContext} from "../context/UserContext";
import SchoolClasses from "../components/SchoolClasses";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Wrapper from "../components/Wrapper";


const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
}));


export default function Overview() {

    const userState = useContext(UserStateContext)
    const classes = useStyles();

    return (
        <Box className={classes.center}>

            <Wrapper>
                <h1>Heyho {userState.userData.firstname}!</h1>
                <h4 style={{fontWeight: "600"}}>Check the latest survey results</h4>
                <SchoolClasses/>
            </Wrapper>

            <Box p={2}>
                <LogoutButton/>
            </Box>

        </Box>
    )
}