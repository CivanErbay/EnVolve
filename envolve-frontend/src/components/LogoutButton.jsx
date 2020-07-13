import React, {useContext} from 'react'
import {UserDispatchContext} from "../context/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import MyButton from "./MyButton";



export default function LogoutButton() {
    const dispatch = useContext(UserDispatchContext)

    function logout() {         //Logout-Methopd
        removeJWTToken()        //Remove Token from localStorage
        dispatch({type: LOGOUT})    //Trigger Logout by setting authStatus:undefined in the context
    }

    return (
        <MyButton onClick={logout} content={"Logout"}/>
    )
}