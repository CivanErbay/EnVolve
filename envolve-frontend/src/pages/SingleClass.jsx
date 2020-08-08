import React, {useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import {Redirect, useParams, useHistory} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {StudentList} from "../components/StudentList";
import {deleteClassById, getClassById} from "../utils/fetch-utils";
import Typography from "@material-ui/core/Typography";
import {Dashboard} from "../components/Dashboard";
import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";

import StepWrapper from "../components/wrapper/StepWrapper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    centerRow: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "solid",
        padding: "1em",
        borderRadius: "15px",
        backgroundColor: "#F7F7F7",
        cursor: "pointer"
    },
    cName: {
        fontSize: "3em",
        fontWeight: "bold",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));


export default function SingleClass() {

    const [swipe, setSwipe] = useState({bottom: false})
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSwipe({...swipe, [anchor]: open});
    };

    const classes = useStyles();
    const [showStudents, setShowStudents] = useState(false);
    const {id} = useParams();
    const [schoolClass, setSchoolClass] = useState(null)
    const [redirectTrigger, setRedirectTrigger] = useState(false)

    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Go to createSurvey Page
    const history = useHistory();
    const routeCreateSurvey = () => {
        let path = `/${schoolClass.id}`
        history.push(path)
    }


    const showStudentList = () => {
        setShowStudents(true)
    }
    const hideStudentList = () => {
        setShowStudents(false)
    }

    const redirectOverview = () => {
        setRedirectTrigger(true)
    }

    const deleteClass = async () => {
        const boolResponse = await deleteClassById(id);
        setRedirectTrigger(boolResponse)
    }

    if (redirectTrigger) {
        return (
            <Redirect to={"/overview"}/>
        )
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>


                {!showStudents ?
                    <Box boxShadow={3} mb={2} className={classes.centerRow} onClick={showStudentList}> <img
                        style={{height: "4vh"}} src="../images/classIcon.svg" alt=""/> <Typography
                        style={{marginLeft: "5px"}}>Show Students</Typography> </Box> :
                    <Box boxShadow={3} mb={2} className={classes.centerRow} onClick={hideStudentList}> <img
                        style={{height: "4vh"}} src="../images/hide.svg" alt=""/> <Typography
                        style={{marginLeft: "5px"}}>Hide Students</Typography> </Box>}

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={routeCreateSurvey}>
                    <img src="../images/survey.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Create Survey</Typography>
                </Box>

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={deleteClass}>
                    <img src="../images/delete.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Delete Class</Typography>
                </Box>

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={redirectOverview}>
                    <img src="../images/back.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Overview</Typography>
                </Box>

            </List>
        </div>
    );


    return (
        <>


            <Box className={classes.center} >
                {schoolClass && (
                    <Box mt={2}> <Typography color={"secondary"}
                                             className={classes.cName}>{schoolClass.classname} </Typography></Box>
                )}

                <StepWrapper><Dashboard schoolClassId={id}/></StepWrapper>


                {showStudents ? <StudentList id={id}/> : null}




            </Box>

            <Box m={6}> {/*Swipe able Drawer*/}
                <React.Fragment key={"bottom"}>
                    <Box onClick={toggleDrawer("bottom", true)}><img style={{height: "8vh"}} src="/images/menu.svg"
                                                                     alt=""/></Box>
                    <SwipeableDrawer
                        anchor={"bottom"}
                        open={swipe["bottom"]}
                        onClose={toggleDrawer("bottom", false)}
                        onOpen={toggleDrawer("bottom", true)}
                    >
                        {list("bottom")}
                    </SwipeableDrawer>
                </React.Fragment>

            </Box>

        </>
    )
}