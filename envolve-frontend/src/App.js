import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import UserContextProvider from "./context/UserContextProvider";
import Navigation from "./components/Navigation";


const theme = createMuiTheme({
    palette: {
        main: {
            primary: "rgba(247,247,247 0.87)",
        },
    },
    typography: {
        fontFamily: ['"Open Sans"', 'sans-serif', 'Modak', 'cursive'].join(','),
        color: "white"
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
