import React, {useContext, useState} from 'react';
import {getSchoolClasses} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import { UserStateContext} from "../context/UserContext";


export default function SchoolClasses() {

    const [schoolClasses, setSchoolClasses] = useState([]);

    //get the actual logged in userContext
    const userState = useContext(UserStateContext)
    //get the teacher out of the context
    const teacher = userState.userData.sub

    //get classes out of this teacher
    getSchoolClasses(teacher).then(response => {
        if(response){
            const classes = response.map(schoolClass => {
                return {...schoolClass}
            })
            setSchoolClasses(classes)
        }
    });

    return (
        <>
            <Box>Heyho</Box>
            <Box>{schoolClasses.map((schoolClass)=> <Box> {schoolClass.classname}</Box>)}</Box>
        </>
    )
}