import React, {useContext, useEffect, useState} from 'react';
import {getSchoolClassesByTeacher} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import {UserStateContext} from "../context/UserContext";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {AddClassButton} from "./AddClassButton";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none',
        fontSize: '10px',
        padding: "0.4em"
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    boxStyle: {
        width: "40%",
        height: "80px",
        borderRadius: "10px"
    },
    details: {
        color: "white",
        fontSize: "10px"
    } ,
    cNames: {
        color: "white",
        fontSize: "35px"
    },

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

                <Box mt={2} key={schoolClasses.id} className={classes.center}>{schoolClasses.map((schoolClass) =>
                    <Box mt={2} style={{background: 'linear-gradient(to right top, #3AD19B, #44B931)'}} className={classNames(classes.boxStyle, classes.center)} boxShadow={6} key={schoolClass.id} m={1}>  <Link
                        className={classNames(classes.link, classes.details)}
                        to={`/singleclass/${schoolClass.id}`}
                        key={schoolClasses.id}> <Typography style={{fontWeight: "800"}} className={classes.cNames}>{schoolClass.classname} </Typography> </Link></Box>
                )}</Box>

                <AddClassButton/>

        </>
    )
}