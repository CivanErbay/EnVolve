import React, {useEffect, useState} from 'react';
import {Box} from "@material-ui/core";
import {Redirect, useParams} from 'react-router-dom';
import BackButton from "../components/BackButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {StudentList} from "../components/StudentList";
import {deleteClassById, getClassById} from "../utils/fetch-utils";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import BasicButton from "../components/BasicButton";
import {Dashboard} from "../components/Dashboard";
import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";

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
        justifyContent: "space-around",
        alignItems: "center",
        border: "solid",
        padding: "1em",
        borderRadius: "15px",
       /* background: "rgba(58, 209, 155, 0.5)",*/
        backgroundColor: "#F7F7F7"
    },

    cName: {
        fontSize: "5em",
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

    const [swipe, setSwipe] = useState({bottomt: false})
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
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showStudentList = () => {
        setShowStudents(true)
    }
    const hideStudentList = () => {
        setShowStudents(false)
    }


    const deleteClass = async () => {
        console.log(id)
        const boolResponse= await deleteClassById(id);
        setDeleteSuccess(boolResponse)
    }

    if(deleteSuccess) {
        return (
            <Redirect to={"/overview"} />
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

{/*
            BackgroundColor defined in index.css
*/}
                    {!showStudents ?
                        <Box boxShadow={3} mb={2} className={classes.centerRow} onClick={showStudentList}>  <img style={{height: "5vh"}} src="../images/classIcon.svg" alt=""/> <Typography>Show Students</Typography> </Box> :
                      <Box boxShadow={3} mb={2} className={classes.centerRow} onClick={hideStudentList}>  <img style={{height: "5vh"}} src="../images/hide.svg" alt=""/> <Typography>Hide Students</Typography> </Box>}

                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={deleteClass} >
                    <img src="../images/delete.svg" alt="" style={{height: "6vh"}}/>
                    <Typography>Delete Class</Typography>
                </Box>

            </List>
        </div>
    );


    return (
        <>


            <Box className={classes.center}>
                {schoolClass && (
                    <Box mt={2}> <Typography
                        className={classes.cName}>{schoolClass.classname} </Typography></Box>
                )}
                <Dashboard/>

                {showStudents ? <StudentList id={id}/> : null}
                <Box mt={2}>

                </Box>

            </Box>

            <div> {/*Swipe able Drawer*/}
                <React.Fragment key={"bottom"}>
                    <BasicButton onClick={toggleDrawer("bottom", true)} content={"Options"}/>
                    <SwipeableDrawer
                        anchor={"bottom"}
                        open={swipe["bottom"]}
                        onClose={toggleDrawer("bottom", false)}
                        onOpen={toggleDrawer("bottom", true)}
                    >
                        {list("bottom")}
                    </SwipeableDrawer>
                </React.Fragment>

            </div>
            <BackButton/>
        </>
    )
}