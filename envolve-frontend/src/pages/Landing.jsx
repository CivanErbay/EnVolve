import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from "../components/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MyButton from "../components/MyButton";


const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
    },
}))


export default function Landing() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.center}>

                <form>
                    <Typography style={{fontWeight: "bold", fontSize:"1.5em"}}>Start Survey</Typography>
                    <Box mt={2}>
                    <TextField id="outlined-basic" label="Enter Code" variant="outlined"/>
                    </Box>
                </form>

                <Box mt={4}>
                    <MyButton content={"Submit"}/>
                </Box>
            </div>
            <Footer/>
        </>
    )
}