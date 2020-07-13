import {Box} from "@material-ui/core";
import React from "react";
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

    return (
        <Box mt={8} className={classes.outer}>
            <h2>Register</h2>
            <Box className={classes.inner}>
                <Box>
                    <TextField style={{width: "150px", margin: "10px"}} id="standard-basic" label="Name"/>
                    <TextField style={{width: "150px", margin: "10px"}} id="standard-basic" label="Lastname"/>
                </Box>
                <TextField style={{width: "320px"}} id="standard-basic" label="Email Address"/>
                <TextField style={{width: "320px", margin: "10px"}} id="standard-basic" label="Password"/>
                <TextField style={{width: "320px"}} id="standard-basic" label="Confirm Password"/>
                <Box mt={5}>
                    <MyButton content={"Submit"}/>
                </Box>

            </Box>
        </Box>
    )
}