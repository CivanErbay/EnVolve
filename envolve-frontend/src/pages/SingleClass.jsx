import React, {useEffect, useState} from 'react';
import {Box, useMediaQuery} from "@material-ui/core";
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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {clearSurveyByClassId} from "../utils/survey-fetch-utils";

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
        cursor: "pointer",
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
    dialogDesktop: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: "100%",
    },
    dialogMobile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around",
        width: "100%",
    },
    buttonText: {
        marginLeft: "8px",
        fontWeight: "bold",
        fontSize: "1.1em"
    }
}));


export default function SingleClass() {

    const [swipe, setSwipe] = useState({bottom: false})
    const toggleDrawer = (anchor, open) => (event) => {

        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSwipe({...swipe, [anchor]: open});
    };
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const [showStudents, setShowStudents] = useState(false);
    const {id} = useParams();
    const [schoolClass, setSchoolClass] = useState(null)
    const [redirectTrigger, setRedirectTrigger] = useState(false)
    const [open, setOpen] = React.useState(false);

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

    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

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
        const deleteBool = await deleteClassById(id);
        setRedirectTrigger(deleteBool)
    }
    const clearSurvey = async () => {
        const clearBool = await clearSurveyByClassId(id)
        /*      clearBool ? setClearResponse(true) : "";*/
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
                        className={classes.buttonText}>Show Students</Typography> </Box> :
                    <Box boxShadow={3} mb={2} className={classes.centerRow} onClick={hideStudentList}> <img
                        style={{height: "4vh"}} src="../images/hide.svg" alt=""/> <Typography
                        className={classes.buttonText}>Hide Students</Typography> </Box>}

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={routeCreateSurvey}>
                    <img src="../images/survey.svg" alt="" style={{height: "4vh"}}/>
                    <Typography className={classes.buttonText}>Create Survey</Typography>
                </Box>


                <Box boxShadow={3} mt={2} className={classes.centerRow}
                     onClick={handleClickOpen}>
                    <img src="../images/alert.svg" alt="" style={{height: "4vh"}}/>
                    <Typography className={classes.buttonText}>Danger Zone</Typography>
                </Box>

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={redirectOverview}>
                    <img src="../images/back.svg" alt="" style={{height: "4vh"}}/>
                    <Typography className={classes.buttonText}>Overview</Typography>
                </Box>

            </List>
        </div>
    );



    return (
        <>


            <Box className={classes.center}>
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


            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{" Attention! "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Your data will be permanently deleted. Clear survey removes all results and survey-templates.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box pb={3} px={3} className={matches ? classes.dialogDesktop : classes.dialogMobile}>
                        <Box boxShadow={3} mt={2} style={{backgroundColor: "#CA0B00"}} className={classes.centerRow} onClick={clearSurvey}>
                            <img src="../images/clear-format.svg" alt="" style={{height: "4vh"}}/>
                            <Typography className={classes.buttonText}>Clear Survey</Typography>
                        </Box>
                        <Box boxShadow={3} mt={2} style={{backgroundColor: "#CA0B00"}} className={classes.centerRow} onClick={deleteClass}>
                            <img src="../images/delete.svg" alt="" style={{height: "4vh"}}/>
                            <Typography className={classes.buttonText}>Delete Class</Typography>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>


        </>
    )
}