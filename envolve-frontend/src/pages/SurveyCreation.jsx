import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from "react-router-dom";
import {getClassById} from "../utils/fetch-utils";
import {postSurvey} from "../utils/survey-fetch-utils";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Wrapper from "../components/Wrapper";
import BasicButton from "../components/BasicButton";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    headline: {
        fontSize: "2em",
    },
    headlinetwo: {
        fontSize: "1.25em",
        fontWeight: "bold"
    }
}))


export default function SurveyCreation() {

    const classes = useStyles();
    const {id} = useParams();
    const [schoolClass, setSchoolClass] = useState(null)
    const [creationSuccess, setCreationSuccess] = useState(false)
    const [questionText, setQuestionText] = useState('')
    const [questionList, setQuestionList] = useState([]);
    const [survey, setSurvey] = useState({
        schoolClassId: '',
        questionList: []
    })

    //Buggy
    //Add single Question to state
    const addQuestion = () => {
        setQuestionList(questionList.concat(questionText))
        setQuestionText("")
    }
    console.log(questionList)
    console.log(survey.questionList)

    //Post fetch Method
    const postSingleSurvey = async () => {
        const postResult = await postSurvey({...survey, schoolClassId: schoolClass.id})
        setCreationSuccess(postResult)
    }

    //set Survey state as soon as questionList changes
    useEffect(() => {
        setSurvey({...survey, questionList: questionList})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionList])

    //Initalize schoolclass
    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (creationSuccess) {
        return (
            <Redirect to={"/overview"}/>
        )
    }


    return (
        <Box color={"secondary"} className={classes.center}>

            {schoolClass &&
            <Typography className={classes.headline} color={"secondary"}> Create Survey - <b>{schoolClass.classname}</b></Typography>}


            <Grid container spacing={2} className={classes.center}>
                <Grid item xs={12} md={6}>
                    <Wrapper>
                        <Typography className={classes.headlinetwo} color={"primary"}>Questionlist</Typography>

                        <List>
                            {questionList && questionList.map((singleQuestion) =>
                                <ListItem key={questionList.id}>
                                    <ListItemAvatar>
                                        <Avatar style={{
                                            background: 'linear-gradient(to right top, #0071A0, #39A4D1)',
                                            padding: ".75em",
                                            marginRight: "1em"
                                        }}>
                                            <img src="../images/question.svg" alt="" style={{height: "4vh"}}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={singleQuestion}
                                    />
                                    <Box m={2}>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <img src="../images/delete.svg" alt="" style={{height: "2vh"}}/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </Box>
                                </ListItem>
                            )}
                        </List>
                        <Box className={classes.center}>
                            <TextField onChange={(event) => setQuestionText(event.target.value)} id="standard-basic1"
                                       label="Question" value={questionText} autoComplete="on"/>
                            <BasicButton style={{marginTop: "20px"}} onClick={addQuestion} content={"Add question"}/>
                        </Box>
                    </Wrapper>
                </Grid>
            </Grid>


            <Box mt={2}> <BasicButton content={"Create"} onClick={postSingleSurvey}/></Box>


        </Box>
    )
}