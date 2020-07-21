import React, {useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import {useParams} from 'react-router-dom';
import BackButton from "../components/BackButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {StudentList} from "../components/StudentList";
import {getClassById} from "../utils/fetch-utils";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import BasicButton from "../components/BasicButton";
import {Dashboard} from "../components/Dashboard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    cName: {
        fontSize: "5em",
        fontWeight: "bold"
    }
}));


export default function SingleClass() {

    const classes = useStyles();

    const [showStudents, setShowStudents] = useState(false);
    const {id} = useParams();
    const [schoolClass, setSchoolClass] = useState(null)
    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showStudentList = () => {
        setShowStudents(true)
    }
    const hideStudentList = () => {
        setShowStudents(false)
    }


    return (
        <Box className={classes.center}>
            {schoolClass && (
                <Box mt={2} className={classNames(classes.boxStyle)}> <Typography
                    className={classes.cName}>{schoolClass.classname} </Typography></Box>)}

            <Dashboard/>

            {showStudents ?  <StudentList id={id}/>  : null}
            <Box mt={2}>
                {!showStudents ? <BasicButton onClick={showStudentList} content={"Students"}/> :
                    <BasicButton onClick={hideStudentList} content={"Hide"}/>}
            </Box>
            <BackButton/>
        </Box>
    )
}