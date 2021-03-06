import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from "react-router-dom";
import {getClassById} from "../utils/fetch-utils";
import {postNewSurvey} from "../utils/survey-fetch-utils";
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
import WhiteWrapper from "../components/wrapper/WhiteWrapper";
import BasicButton from "../components/BasicButton";
import BackButton from "../components/BackButton";
import SimplePopover from "../components/SimplePopover";
import SimplePopoverWhite from "../components/SimplePopoverWhite";
import {useMediaQuery} from "@material-ui/core";

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
        marginTop: "1em",
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
    const [singleQuestion, setSingleQuestion] = useState({questionText: '', keyWord: '', response: 0})
    const [questionList, setQuestionList] = useState([]);
    const [survey, setSurvey] = useState({
        schoolClassId: '',
        questionList: []
    })
    const matches = useMediaQuery('(min-width:800px)');


    //Add single Question to state
    const addQuestion = () => {
        setQuestionList(questionList.concat(singleQuestion))
        setSingleQuestion({questionText: "", keyWord: "", response: 0})
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setSingleQuestion({
            ...singleQuestion,
            [name]: value
        });
    }

    //Post fetch Method
    const postSingleSurvey = async () => {
        const postResult = await postNewSurvey({...survey, schoolClassId: schoolClass.id})
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
                    <WhiteWrapper>
                        <Typography className={classes.headlinetwo} color={"primary"}>Questionlist</Typography>

                        <List>
                            {questionList && questionList.map((singleQuestion, index) =>
                                <ListItem key={questionList.id}>
                                    <ListItemAvatar>
                                        <Avatar style={{backgroundColor: "#272635"}}>
                                            <div style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "4vh",
                                            }}>{index + 1}</div>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText key={questionList.id}
                                                  primary={singleQuestion.questionText}
                                    />
                                    <Box m={2}>
                                        <ListItemSecondaryAction key={questionList.id}>
                                            <IconButton edge="end" aria-label="delete">
                                                <img src="../images/delete.svg" alt="" style={{height: "2vh"}}/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </Box>
                                </ListItem>
                            )}
                        </List>
                        <Box className={classes.center}>
                            <TextField onChange={handleChange} id="standard-basic1"
                                       label="Question" name="questionText" value={singleQuestion.questionText}
                                       autoComplete="on" style={{width: "250px"}}/>

                            <Box mt={2} ml={-7}
                                 style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                <Box mr={3}>
                                    <SimplePopover popoverContent={"Please add a descriptive keyword each question"}/>
                                </Box>
                                <TextField onChange={handleChange} id="standard-basic2"
                                           label="Keyword" name="keyWord" value={singleQuestion.keyWord}
                                           autoComplete="on"/>
                            </Box>
                            <BasicButton style={{marginTop: "20px"}}  disabled={singleQuestion.questionText.length < 10 || singleQuestion.keyWord.length < 2} onClick={addQuestion} content={"Add question"}/>
                        </Box>
                    </WhiteWrapper>
                </Grid>
            </Grid>


            <Box mt={2} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "300px"}}>
                <Box ml={-12} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100px"}}>
                    <SimplePopoverWhite popoverContent={"Please add between 3 - 5 questions"}/>
                </Box>
                <Box>
                    <BasicButton
                        style={{fontSize: "2em"}} content={"Create"} onClick={postSingleSurvey}
                        disabled={questionList.length < 3 || questionList.length > 5}/></Box>
            </Box>

            <Box  mt={matches ? 20 : 0}>
            <BackButton/>
            </Box>
        </Box>
    )
}