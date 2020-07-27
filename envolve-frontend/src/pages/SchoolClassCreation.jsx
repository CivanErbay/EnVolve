import React, { useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import BasicButton from "../components/BasicButton";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {postClass} from "../utils/fetch-utils";
import Typography from "@material-ui/core/Typography";
import BackButton from "../components/BackButton";
import Wrapper from "../components/Wrapper";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function SchoolClassCreation() {
    const classes = useStyles();


    const [singleStudent, setSingleStudent] = useState("")
    const [studentlist, setStudentlist] = useState([])
    const [cname, setCName] = useState("")
    const [creationSuccess, setCreationSuccess] = useState(false)
    const [schoolClass, setSchoolClass] = useState({
        classname: '',
        classmembers: []
    })

    function isDisabled(){
        return !(schoolClass.classname.length >= 2 || schoolClass.classmembers.length >= 5);
    }

    function addStudent() {
        setStudentlist(studentlist.concat(singleStudent))
        setSingleStudent("")
    }


    useEffect(() =>{
        setSchoolClass({...schoolClass, classmembers: studentlist})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[studentlist])

    async function handleSubmit() {
        const postResult = await postClass({...schoolClass, classname: cname});
        setCreationSuccess(postResult);
    }

    if (creationSuccess) {
        return (
            <Redirect to={"/overview"} />
        )
    }

    return (
        <Box mt={3} className={classes.column}>
            <Wrapper>
            <h4>Classname</h4>
            <TextField placeholder="Enter Classname" onChange={(event) => setCName(event.target.value)} value={cname} required/>

            <Box m={2}>{schoolClass.classmembers.map(singleStudent => <Typography key={singleStudent}>{singleStudent}</Typography>)}</Box>

            <Box mt={4}>
            <h4>Students</h4>
            <TextField onChange={(event) => setSingleStudent(event.target.value)} value={singleStudent}/>
            </Box>
            <Box mt={2}>
                <BasicButton onClick={addStudent} content={"Add new Student"}/>
            </Box>
            <Box mt={4}>

            <BasicButton disabled={isDisabled()} onClick={handleSubmit} content={"Create"}/>
            </Box>
            </Wrapper>
            <BackButton/>

        </Box>
    )
}