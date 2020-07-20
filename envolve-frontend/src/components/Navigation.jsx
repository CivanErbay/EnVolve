import React, {useContext, useEffect} from 'react'
import {UserDispatchContext} from "../context/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "../utils/jwt-utils";
import {LOGIN_SUCCESS} from "../context/UserContextProvider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Overview from "../pages/Overview";
import SchoolClassCreation from "../pages/SchoolClassCreation";
import SingleClass from "../pages/SingleClass";
import Landing from "../pages/Landing";

export default function Navigation() {

    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {           //Keep Login status after Refresh
        if (isJWTTokenValid()) {
            dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
        }
    }, [dispatch]);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <PrivateRoute path="/overview" component={Overview} exact/>
                <PrivateRoute path="/creation" component={SchoolClassCreation} exact/>
                <PrivateRoute path="/singleclass/:id" component={SingleClass} exact/>
                <Route path="/">
                    <Landing/>
                </Route>
            </Switch>
        </Router>
    )
}
