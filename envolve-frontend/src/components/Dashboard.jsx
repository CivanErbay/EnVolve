import Box from "@material-ui/core/Box";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    stretch: {
        height: "60vh",
    }

}));

export const Dashboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.stretch}>
            Dashboard
        </Box>
    )
}