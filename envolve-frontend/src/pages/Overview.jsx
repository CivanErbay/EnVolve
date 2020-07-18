import React, {useContext} from "react";
import LogoutButton from "../components/LogoutButton";
import {UserStateContext} from "../context/UserContext";
import SchoolClasses from "../components/SchoolClasses";

export default function Overview () {

    const userState = useContext(UserStateContext)

    return (
        <>
        <h2>Hello {userState.userData.firstname}</h2>
            <SchoolClasses/>
        <LogoutButton/>
        </>
    )
}