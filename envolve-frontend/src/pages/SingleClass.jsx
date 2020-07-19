import React, { useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import {getClassById} from "../utils/fetch-utils";



export default function SingleClass() {

    const { id } = useParams();

    const [schoolClass, setSchoolClass] = useState(undefined);





    useEffect(()=> {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
    },[])

    return (
        <>
        <Box>I am class:  { schoolClass.id }</Box>
            <BackButton/>
            </>
    )
}