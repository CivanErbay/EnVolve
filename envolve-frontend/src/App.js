import React, {useContext, useEffect} from 'react';
import './App.css';
import Landing from "./pages/Landing";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import {UserDispatchContext} from "./context/UserContext";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/UserContextProvider";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Anton',
            'sans-serif'
        ].join(','),
    }
});


function Navigation() {

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
                    <PrivateRoute path="/overview" component={Dashboard} exact/>
                <Route path="/">
                    <Landing/>
                </Route>
            </Switch>
        </Router>
    )
}

function App() {

    return (
        <div className="App">
            <UserContextProvider>
                <ThemeProvider theme={theme}>
                <Navigation/>
                </ThemeProvider>
            </UserContextProvider>
        </div>
    );
}

export default App;
