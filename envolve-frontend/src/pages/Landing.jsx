import React from "react"
import TextField from '@material-ui/core/TextField';
import Footer from "../components/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BasicButton from "../components/BasicButton";



const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh'
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
                    <BasicButton content={"Submit"}/>
                </Box>
            </div>
            <Footer/>
        </>
    )
}