import React, {useContext, useEffect, useState} from 'react';
import {getSchoolClassesByTeacher} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import {UserStateContext} from "../context/UserContext";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none'
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    border: {
        border: "solid",
        borderRadius: "10px",
        borderWidth: "1px",
        padding: "0.5em"
    },
    paperColor: {
        backgroundColor: "#F7F7F7",
        padding: ".75em",
        display: "flex",
        flexDirection: "row"
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
    useEffect(() => {
        getSchoolClassesByTeacher(teacher).then(response => {
            setSchoolClasses(response)
        });
    }, [])


    return (
        <>
            <Box>
                <h3>Your current Classes</h3>
                <Box key={schoolClasses.id} className={classNames(classes.center)}>{schoolClasses.map((schoolClass) =>
                    <Box className={classes.paperColor} m={1}> <h4>{schoolClass.classname} </h4><Link className={classes.link}
                                                                  to={`/singleclass/${schoolClass.id}`}
                                                                  key={schoolClasses.id}> Details </Link>
                    </Box>)}</Box>
            </Box>
            <Button className={classes.border}><Link className={classes.link} to="/creation">Add new class</Link></Button>
        </>
    )
}