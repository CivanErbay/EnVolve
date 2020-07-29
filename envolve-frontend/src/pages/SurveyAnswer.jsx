import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import WhiteWrapper from "../components/wrapper/WhiteWrapper";
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {getSurveyForStudent} from "../utils/survey-fetch-utils";
import BasicButton from "../components/BasicButton";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    qHeadline: {
        fontSize: "1.5em",
        textAlign: "left"
    },
    q :{
        fontSize: "1.25em",
        textAlign: "left"
    }
})

export const SurveyAnswer = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [currentSurvey, setCurrentSurvey] = useState([]);
    const [questionState, setQuestionState] = useState(0)
    const [defaultValueState, setDefaultValueState] = useState(3)


    useEffect(() => {
         getSurveyForStudent(id).then(response => {
             setCurrentSurvey(response)
         })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addQuestionIndex = () => {
        setDefaultValueState(3)
        setQuestionState(questionState+1)
    }

    const marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5'
        }
    ];
    function valuetext(value) {
        return `${value}`;
    }
    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    return(
        <Box className={classes.center} mt={4}>
        <Box>


        </Box>

            <WhiteWrapper>
                <Box mb={1} className={classes.qHeadline}>Question {questionState +1}</Box>

                {currentSurvey.questionList &&  <Typography className={classes.q}> {currentSurvey.questionList[questionState].questionText}</Typography>}
                <Box my={5}>

                    <Box style={{display: "flex", justifyContent: "space-between"}}>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        very low
                    </Typography>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                       very high
                    </Typography>
                    </Box>

                    <Slider
                        min={1}
                        max={5}
                        defaultValue={defaultValueState}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </Box>
                {currentSurvey.questionList && questionState < currentSurvey.questionList.length-1 ? <BasicButton className={classes.q} content={"Next Question"} onClick={addQuestionIndex}/> : <BasicButton content={"Finish"}/>}

            </WhiteWrapper>
        </Box>
    )

}