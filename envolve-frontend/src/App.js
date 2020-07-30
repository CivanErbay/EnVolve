import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
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
        fontFamily: ['Josefin Sans', 'sans-serif',].join(','),
    },
});



function App() {

    return (
        <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Navigation/>
                </MuiThemeProvider>
        </div>
    );
}

export default App;
