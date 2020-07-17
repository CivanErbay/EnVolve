import React, {useContext, useEffect, useState} from 'react';
import {getSchoolClasses} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import {UserStateContext} from "../context/UserContext";

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none'
    }
}));


export default function SchoolClasses() {

    const [schoolClasses, setSchoolClasses] = useState([]);
    const classes = useStyles();
    //get the actual logged in userContext
    const userState = useContext(UserStateContext)
    //get the teacher out of the context
    const teacher = userState.userData.sub

    //get classes out of this teacher
    useEffect(()=> {
        getSchoolClasses(teacher).then(response => {
            if (response) {
                const classes = response.map(schoolClass => {
                    return {...schoolClass}
                })
                setSchoolClasses(classes)
            }
        });
    },[])

    return (
        <>
            <Box>
                <h3>Choose class:</h3>
                <Box>{schoolClasses.map((schoolClass) => <Box key={schoolClasses.id}> {schoolClass.classname}</Box>)}</Box>
            </Box>
            <Button><Link className={classes.link} to="/creation">Add new class</Link></Button>
        </>
    )
}