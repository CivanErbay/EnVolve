import React, {useContext, useEffect} from "react";
import {UserDispatchContext, UserStateContext} from "../context/UserContext";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import {Redirect, Route} from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


export default function PrivateRoute({component: Component, ...rest}) {
    const {authStatus, userData} = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);

    //Each private Route is just accessible by authenticated Users

    useEffect(() => {
        if (
            authStatus === 'SUCCESS' &&
            new Date().getTime() / 1000 >= userData.exp
        ) {
            removeJWTToken();   //Take these two lines for the logout
            dispatch({type: LOGOUT});
        }
    });

    return (
        <Route
            {...rest}
            render={(props) => {
                if (authStatus === 'FAILED' || !authStatus) {
                    return <Redirect to={{pathname:'/login', state: {from: props.location}}}/>
                }
                if (authStatus === 'SUCCESS') {

                    if (new Date().getTime() / 1000 >= userData.exp) {
                        return <Redirect to={{pathname:'/login', state: {from: props.location}}}/>
                    }
                    return <Component {...props} />
                }
                return <LoadingSpinner/>

            }}
        />
    )
}