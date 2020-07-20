import React, {useContext, useEffect, useState} from 'react';
import {getSchoolClassesByTeacher} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import {UserStateContext} from "../context/UserContext";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
        backgroundColor: "#4FD13A",
        width: "40%",
        height: "100px",
        borderRadius: "10px"
    },
    details: {
        color: "white",
        fontSize: "10px"
    } ,cNames: {
        color: "white",
        fontSize: "25px"
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

                <h3>Your current classes</h3>
                <Box key={schoolClasses.id} className={classes.center}>{schoolClasses.map((schoolClass) =>
                    <Box className={classNames(classes.boxStyle, classes.center)} boxShadow={3} key={schoolClass.id} m={1}><Typography className={classes.cNames}>{schoolClass.classname} </Typography>  <Link
                        className={classNames(classes.link, classes.details)}
                        to={`/singleclass/${schoolClass.id}`}
                        key={schoolClasses.id}> Show Details </Link></Box>
                )}</Box>

            <Button className={classes.border}><Link className={classes.link} to="/creation">Add new
                class</Link></Button>
        </>
    )
}