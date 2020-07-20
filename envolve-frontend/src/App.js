import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import UserContextProvider from "./context/UserContextProvider";
import Navigation from "./components/Navigation";
import {makeStyles} from "@material-ui/core/styles";


const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Rowdies"', 'cursive'].join(','),
    },
});



function App() {


    return (
        <div className="App">
            <UserContextProvider>
                <MuiThemeProvider theme={theme}>
                    <Navigation/>
                </MuiThemeProvider>
            </UserContextProvider>
        </div>
    );
}

export default App;
