import React from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import classNames from 'classnames';


export default function Login() {

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
            border: "solid",
            padding: "1.5em",
            borderRadius: "5px",
            borderWidth: "1px",
            width: "250px"
        }
    }))

    const classes = useStyles();
    return (

        <Box mt={8} className={classes.centerPage}>
            <Box boxShadow={2} className={classes.border}>
            <form className={classes.center}>
                <Typography style={{fontWeight: "bold"}}>Teacher Login</Typography>
                <TextField id="standard-basic" label="Username"/>
                <TextField id="standard-basic" label="Password"/>
                <Box pt={2}>
                    <Button variant="contained">Submit</Button>
                </Box>
            </form>
            </Box>
            <Box>
            <Typography style={{fontWeight: "bold"}}>Not yet registered?</Typography>
                <Box pt={2}>
                    <Button variant="contained">Register</Button>
                </Box>
            </Box>
        </Box>

    )
}