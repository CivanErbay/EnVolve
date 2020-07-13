import React, {useContext} from 'react'
import {UserDispatchContext} from "../context/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import MyButton from "./MyButton";



export default function LogoutButton() {
    const dispatch = useContext(UserDispatchContext)

    function logout() {
        removeJWTToken()
        dispatch({type: LOGOUT})
    }

    return (
        <MyButton onClick={logout} content={"Logout"}/>
    )
}