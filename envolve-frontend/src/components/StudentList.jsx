import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";
import WhiteWrapper from "./wrapper/WhiteWrapper";
import Typography from "@material-ui/core/Typography";



export const StudentList = ({id}) => {

    const [schoolClass, setSchoolClass] = useState(null)


    useEffect(()=> {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (

        <Box>

        {schoolClass &&  (    <WhiteWrapper style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        {schoolClass.classmembers.map((member) =>
             <Typography style={{margin: "0 0.5em 0 0.5em"}} key={member.student}>{member.student} ({member.code})</Typography>)} </WhiteWrapper>)
        }

        </Box>

    )
}