import React, {useState} from 'react';
import {getSchoolClasses} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";

export default function SchoolClasses() {

    const [schoolClasses, setSchoolClasses] = useState([]);

    getSchoolClasses().then(response => {
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