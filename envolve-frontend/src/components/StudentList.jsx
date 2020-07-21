import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";



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
        {schoolClass &&  ( <>
            {schoolClass.classmembers.map((member) =>
                <h4 key={member.student}>{member.student}</h4>)} </> )
        }
        </Box>

    )
}