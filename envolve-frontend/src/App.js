import React from 'react';
import './App.css';
import Landing from "./pages/Landing";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";


function Navigation() {

    return (
        <Router>

            <Header/>
            <Switch>
                <Route path="/login" exact>
                    <Login/>
                </Route>
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
            <Navigation/>
        </div>
    );
}

export default App;
