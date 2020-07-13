import React from 'react';
import './App.css';
import Landing from "./pages/Landing";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Anton',
            'sans-serif'
        ].join(','),
    }
});


function Navigation() {

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
            <ThemeProvider theme={theme}>
            <Navigation/>
            </ThemeProvider>
        </div>
    );
}

export default App;
