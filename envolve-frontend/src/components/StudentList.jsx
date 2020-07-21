import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
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
        alignItems: "center",
    },
    cName: {
        fontSize: "4em"
    }

}));


export const StudentList = ({id}) => {

    const classes = useStyles();
    const [schoolClass, setSchoolClass] = useState(null)


    useEffect(()=> {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (

        <Box>
        {schoolClass &&  ( <>
            {schoolClass.classmembers.map((member) =>
                <h4 key={member.student}>{member.student}</h4>)} </> )
        }
        </Box>

    )
}