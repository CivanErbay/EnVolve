import React, {useContext} from 'react'
import {UserDispatchContext} from "../context/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import BasicButton from "./BasicButton";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        width: '100%',
            position: 'fixed',
            bottom: 0,
    }
}));


export default function LogoutButton() {
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext)

    function logout() {         //Logout-Methopd
        removeJWTToken()        //Remove Token from localStorage
        dispatch({type: LOGOUT})    //Trigger Logout by setting authStatus:undefined in the context
    }

    return (
        <Box mt={4} /*className={classes.stickToBottom}*/>
        <BasicButton onClick={logout} content={"Logout"}/>
        </Box>
    )
}