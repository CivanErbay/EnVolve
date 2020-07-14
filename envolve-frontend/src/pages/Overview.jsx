import React, {useContext} from "react";
import LogoutButton from "../components/LogoutButton";
import {UserStateContext} from "../context/UserContext";



export default function Overview () {

    const userState = useContext(UserStateContext)

    return (
        <>
        <h2>Hello {userState.userData.firstname}</h2>
        <LogoutButton/>
        </>
    )
}