import React, {useEffect, useState} from 'react';
import {getSchoolClassesByTeacher} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_CLASSES_FAILURE, FETCH_CLASSES_REQUEST, FETCH_CLASSES_SUCCESS} from "../actions";


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none',
        fontSize: '10px',
        padding: "0.4em",
        display: "flex",
        width: "90%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    center: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    boxStyle: {
        width: "80%",
        height: "80px",
        borderRadius: "10px",
        background: 'linear-gradient(to right top, #0071A0, #39A4D1)', border: "solid", borderWidth: "5px"
    },
    details: {
        color: "white",
        fontSize: "10px"
    },
    cNames: {
        color: "white",
        fontSize: "45px"
    },

}));


export default function SchoolClasses() {

    const [schoolClasses, setSchoolClasses] = useState([]);
    const classes = useStyles();
    //get the actual logged in userContext
    const userState = useSelector(state => state.loggedUser);
    //get the teacher out of the context
    const teacher = userState.userData.sub
    const dispatch = useDispatch();


    //get classes out of this teacher
    useEffect(() => {
        dispatch({type: FETCH_CLASSES_REQUEST})
        getSchoolClassesByTeacher(teacher).then(response => {
            setSchoolClasses(response)
            dispatch({type: FETCH_CLASSES_SUCCESS, payload: response})
        }).catch((e) => {
            dispatch({type: FETCH_CLASSES_FAILURE})
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkFinishedStudents = (classmembers) => {
        let counter = 0;
        for (let i = 0; i < classmembers.length; i++) {
            if (!classmembers[i].activeStatus) {
                counter++
            }
        }
        return counter
    }

    return (
        <>

            <Box mt={2} key={schoolClasses.id} className={classes.center}>{schoolClasses.map((schoolClass) =>
                <Box mt={2} className={classNames(classes.boxStyle, classes.center)} boxShadow={6}
                     key={schoolClass.id} m={1}> <Link
                    className={classNames(classes.link, classes.details)}
                    to={`/singleclass/${schoolClass.id}`}
                    key={schoolClasses.id}>
                    <Typography style={{fontWeight: "700"}}
                                                        className={classes.cNames}>{schoolClass.classname}
                     </Typography>
                    <Box style={{display: "flex", flexDirection: "column"}}>
                    <Typography style={{lineHeight: "1.1", fontWeight: "700"}}>
                        {checkFinishedStudents(schoolClass.classmembers)} / {schoolClass.classmembers.length}
                    </Typography>
                        <Typography style={{lineHeight: "1.1"}}>
                       curr. Survey
                    </Typography>
                    </Box>
                </Link>
                </Box>
            )}</Box>


        </>
    )
}