import React, {useContext} from 'react'
import {UserDispatchContext} from "../context/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import BasicButton from "./BasicButton";
import Box from "@material-ui/core/Box";

export default function LogoutButton() {

    const dispatch = useContext(UserDispatchContext)

    function logout() {         //Logout-Methopd
        removeJWTToken()        //Remove Token from localStorage
        dispatch({type: LOGOUT})    //Trigger Logout by setting authStatus:undefined in the context
    }

    return (
        <Box mt={4}>
        <BasicButton onClick={logout} content={"Logout"}/>
        </Box>
    )
}