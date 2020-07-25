import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import UserContextProvider from "./context/UserContextProvider";
import Navigation from "./components/Navigation";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#272635",
        },
        secondary: {
            main: "#F7F7F7",
        }
    },
    typography: {
        fontFamily: ['"Open Sans"', 'sans-serif', 'Modak', 'cursive'].join(','),
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
