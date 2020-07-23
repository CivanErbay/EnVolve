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
import {Link, Redirect, useLocation} from "react-router-dom";
import {About} from "../components/About";



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
    border: {
        padding: "1.5em",
        borderRadius: "5px",
        borderWidth: "1px",
        width: "250px",
        background: "rgba(58, 209, 155, 0.5)"
    },
    link: {
        textTransform: "none",
        textDecoration: 'none',
        color: 'black',
    }
}))


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
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
            .catch(() => {
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
            <Box boxShadow={2} className={classes.border}>
            <form className={classes.center}>
                <Typography style={{fontWeight: "bold"}}>Teacher Login</Typography>
                <TextField onChange={(event) => setUsername(event.target.value)} id="standard-basic" label="Username" value={username}/>
                <TextField onChange={(event) => setPassword(event.target.value)} id="standard-basic" type="password" label="Password" value={password}/>
                <Box pt={2}>
                    <BasicButton onClick={login} content={"Login"}/>
                </Box>
            </form>
            </Box>
            <Box>
            <Typography style={{fontWeight: "bold"}}>Not yet registered?</Typography>
                <Box mt={2} boxShadow={2} p={1} style={{ borderRadius: "5px", background: "rgba(58, 209, 155, 0.5)"}}>
                    <Link className={classes.link} to="/register">Register</Link>
                </Box>
            </Box>
        </Box>
            <img style={{height: "5vh", padding: "0.5em"}} src="./images/arrowDown.svg" alt=""/>
        <About/>
        </>

    )
}