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
    paperColor: {
        backgroundColor: "#F7F7F7",
        width: "200px",
        borderRadius: "5px"
    },
    magicHover: {
        backgroundSize: "100% 200%",
        textDecoration: "none",
        listStyleType: "none",
        backgroundImage: "linear-gradient(to bottom, #fff 50%, #f9ce21 50%)",
        transition: "background-position 0.5s ease-in-out, color 0.5s ease-in-out",
        color: "black",
        borderBottom: "solid",
        borderColor: "#f9ce21",
        '&:hover': {
            backgroundPosition: "0 100%",
            color: "black",
            textDecoration: "none",
            listStyleType: "none",
        },
        '&:focus': {
            backgroundPosition: "0 100%",
            color: "black",
            textDecoration: "none",
            listStyleType: "none",
        }
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
            <Box>
                <h3>Your current classes</h3>
                <Box key={schoolClasses.id} className={classes.center}>{schoolClasses.map((schoolClass) =>
                    <Box className={classes.paperColor} boxShadow={3} key={schoolClass.id} m={1}><h1>{schoolClass.classname} </h1>  <Link
                        className={classNames(classes.link, classes.magicHover)}
                        to={`/singleclass/${schoolClass.id}`}
                        key={schoolClasses.id}> Show Details </Link></Box>
                )}</Box>
            </Box>
            <Button className={classes.border}><Link className={classes.link} to="/creation">Add new
                class</Link></Button>
        </>
    )
}