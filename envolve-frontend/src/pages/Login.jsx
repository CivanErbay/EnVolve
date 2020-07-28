import React, {useContext, useState} from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import BasicButton from "../components/BasicButton";
import {UserDispatchContext, UserStateContext} from "../context/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../context/UserContextProvider";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import {performLogin} from "../utils/auth-utils";
import { Redirect, useLocation} from "react-router-dom";
import {About} from "../components/About";
import {RegisterButton} from "../components/RegisterButton";



const useStyles = makeStyles((theme) => ({
    centerPage: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        height: '70vh'
    },
    center: {
        display: "flex",
        flexDirection: "column",
    },
    loginBox: {
        padding: "1.5em",
        borderRadius: "5px",
        borderWidth: "1px",
        width: "250px",
        background: "#F7F7F7"
    },

}))


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorInfo, setErrorInfo] = useState("")
    const classes = useStyles();

    const dispatch = useContext(UserDispatchContext)

    function login() {
        dispatch({ type: LOGIN });
        performLogin(username, password)
            .then((response) => {
                setJWTToken(response);
                const userData = getDecodedJWTToken();
                dispatch({type: LOGIN_SUCCESS, payload: userData });
            })
            .catch((e) => {
                dispatch({ type: LOGIN_FAILED });
            })
    }

    const { authStatus } = useContext(UserStateContext);
    const location = useLocation();
    if (authStatus === 'SUCCESS') {
        let locationState = location.state || {from:{pathname: "/overview"}}
        return <Redirect to={locationState.from.pathname} />;
    }

    return (
        <>
        <Box mt={5} className={classes.centerPage}>
            <Box boxShadow={2} className={classes.loginBox}>
            <form className={classes.center}>
                <Typography style={{fontWeight: "bold", fontSize: "1.5em"}}>Teacher Login</Typography>
                <TextField onChange={(event) => setUsername(event.target.value)} id="standard-basic1" label="Username" value={username} autoComplete="on"/>
                <TextField onChange={(event) => setPassword(event.target.value)} id="standard-basic2" type="password" label="Password" value={password} autoComplete="on"/>
                <Box pt={2}>
                    <BasicButton onClick={login} content={"Login"}/>
                </Box>
            </form>
            </Box>
            <RegisterButton/>
        </Box>
            <img style={{height: "5vh", padding: "0.5em"}} src="./images/arrowDown.svg" alt=""/>
        <About/>
        </>

    )
}