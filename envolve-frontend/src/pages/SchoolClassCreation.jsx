import React, {useContext, useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import MyButton from "../components/MyButton";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import classNames from 'classnames';
import {postClass} from "../utils/fetch-utils";
import {UserStateContext} from "../context/UserContext";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        position: 'fixed',
        bottom: '30px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none'
    }
}));

export default function SchoolClassCreation() {
    const classes = useStyles();


    const [singleStudent, setSingleStudent] = useState("")
    const [studentlist, setStudentlist] = useState([])
    const [cname, setCName] = useState("")

    const [schoolClass, setSchoolClass] = useState({
        classname: '',
        classmembers: []
    })


    function addStudent() {
        setStudentlist(studentlist.concat(singleStudent))
    }


    useEffect(() =>{
        setSchoolClass({...schoolClass, classmembers: studentlist})
    },[studentlist])

    function handleSubmit() {
        postClass( {...schoolClass, classname: cname});
    }

    console.log(schoolClass)
    return (
        <Box mt={3} className={classes.column}>
            <h4>Classname</h4>
            <TextField placeholder="Enter Classname" onChange={(event) => setCName(event.target.value)} value={cname}/>

            <Box m={2}>{schoolClass.classmembers.map(singleStudent => <Typography key={singleStudent}>{singleStudent}</Typography>)}</Box>

            <Box mt={4}>
            <h4>Students</h4>
            <TextField onChange={(event) => setSingleStudent(event.target.value)} value={singleStudent}/>
            </Box>
            <Box mt={2}>
                <MyButton onClick={addStudent} content={"Add new Student"}/>
            </Box>
            <Box mt={6}>
                <MyButton onClick={handleSubmit} content={"Submit"}/>
            </Box>

            <Button><
                Link className={classNames(classes.stickToBottom, classes.link)} to="/overview">Back</Link>
            </Button>

        </Box>
    )
}