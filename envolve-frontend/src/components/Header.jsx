import {Link, Redirect} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {removeJWTToken} from "../utils/jwt-utils";
import {LOGOUT} from "../context/UserContextProvider";
import {UserDispatchContext, UserStateContext} from "../context/UserContext";


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    image: {
        width: "100%",
        maxWidth: "550px"
    },


}))

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useContext(UserDispatchContext)
    const [loginState, setLoginState] = useState(false)

    const { authStatus } = useContext(UserStateContext);
    console.log(authStatus)


    useEffect(() => {
        if (authStatus === 'SUCCESS') {
            setLoginState(true)
        }

    },[authStatus] )

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function logout() {         //Logout-Methopd
        removeJWTToken()        //Remove Token from localStorage
        dispatch({type: LOGOUT})    //Trigger Logout by setting authStatus:undefined in the context
    }


    const classes = useStyles();
    return (
        <Box px={3} pt={3}  className={classes.bgImage}>
            <div><Link className={classes.link} to="/">
                <img className={classes.image} src="/images/envolveLogoNew.svg" alt=""/>
            </Link>
            </div>
            {loginState === true ?  <div style={{display: "flex", justifyContent: "flex-end"}}>

                <div>


                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><img
                        style={{height: "5vh"}} src="/images/burgermenu.svg" alt=""/></Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div> : null}

        </Box>
)
}