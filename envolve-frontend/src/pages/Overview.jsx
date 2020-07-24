import React, {useContext} from "react";
import {UserDispatchContext, UserStateContext} from "../context/UserContext";
import SchoolClasses from "../components/SchoolClasses";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Wrapper from "../components/Wrapper";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useHistory } from "react-router-dom";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";




const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    centerRow: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "solid",
        padding: "1em",
        borderRadius: "15px",
        /* background: "rgba(58, 209, 155, 0.5)",*/
        backgroundColor: "#F7F7F7"
    },
}));


export default function Overview() {

    //For Redirect to /create
    const history = useHistory();
    const routeChange = () =>{
        let path = `/creation`;
        history.push(path);
    }

    //For Logout
    const dispatch = useContext(UserDispatchContext)
    function logout() {         //Logout-Methopd
        removeJWTToken()        //Remove Token from localStorage
        dispatch({type: LOGOUT})    //Trigger Logout by setting authStatus:undefined in the context
    }

    //For Drawer
    const [swipe, setSwipe] = React.useState({
        bottom: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSwipe({ ...swipe, [anchor]: open });
    };

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
                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={routeChange}>
                    <img src="../images/plus.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Create Class</Typography>
                </Box>
                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={routeChange}>
                    <img src="../images/survey.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Create Survey</Typography>
                </Box>
                <Box boxShadow={3} mt={2} className={classes.centerRow} onClick={logout} >
                    <img src="../images/logout.svg" alt="" style={{height: "4vh"}}/>
                    <Typography style={{marginLeft: "5px"}}>Logout</Typography>
                </Box>


            </List>
        </div>
    );

    const userState = useContext(UserStateContext)
    const classes = useStyles();


    return (
        <Box className={classes.center}>

            <Wrapper>
                <h1>Heyho {userState.userData.firstname}!</h1>
                <h4 style={{fontWeight: "600"}}>Check the latest survey results</h4>
                <SchoolClasses/>
            </Wrapper>



            <div> {/*Swipe able Drawer*/}
                <React.Fragment key={"bottom"}>
                    <Box mt={10} onClick={toggleDrawer("bottom", true)} ><img style={{height: "8vh"}}  src="./images/menu.svg" alt=""/></Box>
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

        </Box>
    )
}