import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import WhiteWrapper from "../components/wrapper/WhiteWrapper";
import {useHistory, useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {getSurveyForStudent, postNewSurvey, postSurveyAnswer} from "../utils/survey-fetch-utils";
import BasicButton from "../components/BasicButton";
import Slider from "@material-ui/core/Slider";
import LinearWithValueLabel from "../components/ProgressBar";

const useStyles = makeStyles({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    qHeadline: {
        fontSize: "1.25em",
        textAlign: "left",
        fontWeight: "normal"
    },
    q: {
        fontSize: "1.5em",
        textAlign: "left",
        fontWeight: "bold"
    }
})

export const SurveyAnswer = () => {
    const classes = useStyles();
    const {id} = useParams();
    //State for newSurvey Fetch
    const [currentSurvey, setCurrentSurvey] = useState([]);
    //State for Question Counter
    const [questionState, setQuestionState] = useState(0)
    //State for Default Slider Value reset
    const [defaultValueState, setDefaultValueState] = useState(3)
    //State for final post Fetch Array
    const [collectedAnswers, setCollectedAnswers] = useState({
        studentCode: '',
        questionList: []
    })
    //State for accumulating answerList of each singleQuestions
    const [answerList, setAnswerList] = useState([])

    const [progressValue, setProgressValue] = useState(0)
    const [userResponse, setUserResponse] = useState(undefined)


    useEffect(() => {
        getSurveyForStudent(id).then(fetchResponse => {
            setCurrentSurvey(fetchResponse)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const history = useHistory();
    const routeLanding = () => {
        let path = `/`
        history.push(path)
    }

    //Post fetch Method
    const postAnswer = async () => {
     await postSurveyAnswer({...collectedAnswers, studentCode: id, questionList: answerList})
    }
    const nextQuestionButton = () => {
        setDefaultValueState(3)
        setAnswerList(answerList.concat(userResponse))
        setQuestionState(questionState + 1)
    }

    const finishButton = () => {
        setCollectedAnswers(collectedAnswers.concat(userResponse))
        postAnswer().then(routeLanding).catch()
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

    const handleChange = response => (e, value) => {
        setUserResponse({
            response: value // --> Important bit here: This is how you set the value of sliders
        });
    };


    console.log(userResponse)
    console.log(answerList)
    console.log(currentSurvey)

    return (
        <Box className={classes.center} mt={4}>
            <Box>


            </Box>

            <WhiteWrapper>
                <Box mb={1} className={classes.qHeadline}>Question {questionState + 1}</Box>
                <LinearWithValueLabel progressVal={{}}/>

                {currentSurvey.questionList && <Typography
                    className={classes.q}> {currentSurvey.questionList[questionState].questionText}</Typography>}
                <Box my={5}>


                    <Slider
                        min={1}
                        max={5}
                        onChange={handleChange(userResponse)}
                        value={userResponse}
                        defaultValue={defaultValueState}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                    <Box style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            very low
                        </Typography>
                        <Typography id="discrete-slider-restrict" gutterBottom>
                            very high
                        </Typography>
                    </Box>
                </Box>
                {currentSurvey.questionList && questionState < currentSurvey.questionList.length - 1 ?
                    <BasicButton className={classes.q} content={"Next Question"} onClick={nextQuestionButton}/> :
                    <BasicButton /*onClick={finishButton}*/ content={"Finish"}/>}

            </WhiteWrapper>
        </Box>
    )

}