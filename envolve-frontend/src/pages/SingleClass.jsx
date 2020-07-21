import React, { useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import {getClassById} from "../utils/fetch-utils";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Wrapper from "../components/Wrapper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
}));


export default function SingleClass() {

    const classes = useStyles();
    const { id } = useParams();

    const [schoolClass, setSchoolClass] = useState(null);

    useEffect(()=> {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    return (
        <Box className={classes.center}>
            <Wrapper>
                            {schoolClass &&  ( <>
                                <Box mt={4}>{schoolClass.classname} </Box>
                                {schoolClass.classmembers.map((member) =>
                                <h4 key={member.student}>{member.student}</h4>)} </> )
                                 }
            </Wrapper>
            <BackButton/>
            </Box>
    )
}