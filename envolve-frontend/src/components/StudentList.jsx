import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";
import WhiteWrapper from "./WhiteWrapper";



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

        {schoolClass &&  (    <WhiteWrapper style={{display: "flex"}}>
        {schoolClass.classmembers.map((member) =>
             <h4 style={{margin: "0 0.5em 0 0.5em"}} key={member.student}>{member.student}</h4>)} </WhiteWrapper>)
        }

        </Box>

    )
}