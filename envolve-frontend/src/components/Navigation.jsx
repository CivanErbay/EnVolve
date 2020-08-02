import React, {useEffect} from 'react'
import {getDecodedJWTToken, isJWTTokenValid} from "../utils/jwt-utils";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Overview from "../pages/Overview";
import SchoolClassCreation from "../pages/SchoolClassCreation";
import SingleClass from "../pages/SingleClass";
import Landing from "../pages/Landing";
import {Box} from "@material-ui/core";
import SurveyCreation from "../pages/SurveyCreation";
import {SurveyAnswer} from "../pages/SurveyAnswer";
import ThankYou from "./ThankYou";
import NoSurvey from "./NoSurvey";
import {useDispatch} from "react-redux";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "../actions";


export default function Navigation() {



    const dispatch = useDispatch()

    useEffect(() => {           //Keep Login status after Refresh
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()});
        } else {
            dispatch({type: LOGIN_FAILED})
        }
    }, [dispatch]);

    return (
        <Box>
            <Router>
                <Header/>

                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/register" component={Register}/>
                    <Route path="/answer/:id" component={SurveyAnswer} exact/>
                    <Route path="/thankyou" component={ThankYou} exact/>
                    <Route path="/nosurvey" component={NoSurvey} exact/>
                    <PrivateRoute path="/overview" component={Overview} exact/>
                    <PrivateRoute path="/creation" component={SchoolClassCreation} exact/>
                    <PrivateRoute path="/singleclass/:id" component={SingleClass} exact/>
                    <PrivateRoute path="/:id" component={SurveyCreation} exact/>

                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>

            </Router>
        </Box>
    )
}
