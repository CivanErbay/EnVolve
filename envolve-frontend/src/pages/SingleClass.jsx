import React, { useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import {getClassById} from "../utils/fetch-utils";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Wrapper from "../components/Wrapper";
import {StudentList} from "../components/StudentList";

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


    return (
        <Box className={classes.center}>
            <Wrapper>
                           <StudentList id={id}/>
            </Wrapper>
            <BackButton/>
            </Box>
    )
}