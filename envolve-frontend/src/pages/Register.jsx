import {Box} from "@material-ui/core";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BasicButton from "../components/BasicButton";
import {Link, Redirect} from 'react-router-dom';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import WhiteWrapper from "../components/wrapper/WhiteWrapper";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "../actions";
import {postRegister} from "../utils/auth-utils";
import {usePromiseTracker} from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import {trackPromise} from 'react-promise-tracker';


const useStyles = makeStyles((theme) => ({
    outer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '50vh'
    },
    inner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        textTransform: 'none'
    }
}));

export default function Register() {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [hideState, setHideState] = useState(false)
    const [registerState, setRegisterState] = useState({
        username: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: '',
        email: '',
    })

    const LoadingIndicator = props => {
        const {promiseInProgress} = usePromiseTracker();

        return (
            promiseInProgress &&
            <div
                style={{
                    width: "100%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Loader type="ThreeDots" color="#F7F7F7" height="100" width="100"/>
            </div>
        );
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setRegisterState({
            ...registerState,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (registerState.confirmpassword !== registerState.password) {
            setAnchorEl(event.currentTarget);
        } else {
            setHideState(true)
            trackPromise(
                postRegister(registerState)
                    .then((response) => {
                        setJWTToken(response);
                        const userData = getDecodedJWTToken();
                        dispatch({type: LOGIN_SUCCESS, payload: userData});
                    })
                    .catch(() => {
                        dispatch({type: LOGIN_FAILED});
                    }));
        }
    }

    const {authStatus} = useSelector(state => state.loggedUser)

    if (authStatus === 'SUCCESS') {
        return <Redirect to={'/overview'}/>;
    }


    return (
        <Box className={classes.inner}>
            {hideState ? <LoadingIndicator/> :
                <>
                    <WhiteWrapper style={{padding: "3em 2.25em 4em 2.25em"}}>
                        <Box className={classes.outer}>
                            <h2>Register</h2>
                            <form>
                                <Box className={classes.inner}>
                                    <TextField style={{width: "320px"}} onChange={handleChange} name="username"
                                               label="Username"/>
                                    <Box>
                                        <TextField style={{width: "150px", margin: "10px"}} onChange={handleChange}
                                                   name="firstname"
                                                   label="Name"/>
                                        <TextField style={{width: "150px", margin: "10px"}} onChange={handleChange}
                                                   name="lastname"
                                                   label="Lastname"/>
                                    </Box>
                                    <TextField style={{width: "320px"}} name="email" onChange={handleChange}
                                               label="Email Address"/>
                                    <TextField style={{width: "320px", margin: "10px"}} type="password"
                                               onChange={handleChange} name="password" label="Password"/>
                                    <TextField style={{width: "320px"}} onChange={handleChange} name="confirmpassword"
                                               type="password" label="Confirm Password"/>
                                    <Box mt={5}>
                                        <BasicButton onClick={handleSubmit}
                                                     disabled={registerState.username.length < 2 || registerState.firstname.length < 2 || registerState.lastname.length < 2 || registerState.password.length < 2 || registerState.email.length < 2
                                                     } content={"Register"}/>
                                        {registerState.confirmpassword !== registerState.password &&
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Typography className={classes.typography}>Passwords not
                                                matching</Typography>
                                        </Popover>}
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </WhiteWrapper>
                    <Box pt={6} pb={2}>
                        <Button><
                            Link className={classes.link} to="/login">Back</Link>
                        </Button>
                    </Box> </>}


        </Box>
    )
}