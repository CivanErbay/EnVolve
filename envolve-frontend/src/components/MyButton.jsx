import React from 'react'
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    buttonStyle : {
        textTransform: 'none'
    }
}))


export default function MyButton({disabled, content, onClick}) {

    const classes = useStyles();
    return(
            <Button disabled={disabled} className={classes.buttonStyle} onClick={onClick} variant="contained">{content}</Button>
    )
}