import {Box} from "@material-ui/core";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import MyButton from "../components/MyButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

}));


export default function Register() {

    const classes = useStyles();
    const [registerState, setRegisterState] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
       })

    function handleChange(event) {
        const { name, value } = event.target;
        setRegisterState({
            ...registerState,
            [name]: value
        });
    }

    return (
        <Box mt={12} className={classes.outer}>
            <h2>Register</h2>
            <Box className={classes.inner}>
                <TextField style={{width: "320px"}} id="standard-basic" onChange={handleChange} name="username" label="Username"/>
                <Box>
                    <TextField style={{width: "150px", margin: "10px"}} onChange={handleChange} name="firstname" id="standard-basic" label="Name"/>
                    <TextField style={{width: "150px", margin: "10px"}} onChange={handleChange} name="lastname" id="standard-basic" label="Lastname"/>
                </Box>
                <TextField style={{width: "320px"}} id="standard-basic" name="email" onChange={handleChange} label="Email Address"/>
                <TextField style={{width: "320px", margin: "10px"}} id="standard-basic" onChange={handleChange} name="password" label="Password"/>
                <TextField style={{width: "320px"}} id="standard-basic" label="Confirm Password"/>
                <Box mt={5}>
                    <MyButton content={"Submit"}/>
                </Box>

            </Box>
        </Box>
    )
}