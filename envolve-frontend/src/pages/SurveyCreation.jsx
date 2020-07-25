import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getClassById} from "../utils/fetch-utils";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function SurveyCreation() {

    const {id} = useParams();
    const [schoolClass, setSchoolClass] = useState(null)

    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //NEXT STEP - POST METHOD & INPUT FIELD + STATES

    return (
        <Box color={"secondary"}>
            {schoolClass && <Typography color={"secondary"}>Create Survey for class {schoolClass.classname}</Typography>}
        </Box>
    )
}