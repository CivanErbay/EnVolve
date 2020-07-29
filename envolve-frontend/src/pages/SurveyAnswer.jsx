import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import WhiteWrapper from "../components/wrapper/WhiteWrapper";
import {useParams} from "react-router-dom";

export const SurveyAnswer = () => {

    const {id} = useParams();


    return(
        <Box>
        <Typography>
            Welcome XY
        </Typography>

            <WhiteWrapper>
                <Box>Question</Box>
                <Typography>{id}</Typography>
            </WhiteWrapper>
        </Box>
    )

}