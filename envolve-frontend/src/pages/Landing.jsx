import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import Footer from "../components/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import BasicButton from "../components/BasicButton";
import {useHistory} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh'
    },
    codeBox : {
        backgroundColor: "#F7F7F7",
        borderRadius: "5px"
    }
}))


export default function Landing() {

    const[studentCode, setStudentCode] = useState("");
    const classes = useStyles();


    const history = useHistory();
    const routeSurveyAnswer = () => {
        let path = `/${studentCode}`
        history.push(path)
    }

    return (
        <>
            <div className={classes.center}>
                <Box p={5} boxShadow={3} style={{boxShadow: "#FFFFF"}} className={classes.codeBox}>
                <form>
                    <Typography color={"primary"} style={{fontWeight: "bold", fontSize:"1.5em"}}>Start Survey</Typography>
                    <Box mt={2} >
                    <TextField onChange={(event) => setStudentCode(event.target.value)} value={studentCode} id="outlined-basic" label="Enter Code" variant="outlined"/>
                    </Box>
                </form>

                <Box mt={4}>
                    <BasicButton style={{fontSize: "1em"}} content={"Start"} onClick={routeSurveyAnswer}/>
                </Box>
                    </Box>
            </div>
            <Footer/>
        </>
    )
}