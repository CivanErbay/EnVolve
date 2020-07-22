import React from 'react'
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    buttonStyle : {
        textTransform: 'none',
        background: "rgba(58, 209, 155, 0.5)",
    }
}))


export default function BasicButton({className, disabled, content, onClick,}) {

    const classes = useStyles();
    return(
            <Button className={classNames(classes.buttonStyle, className)} disabled={disabled} onClick={onClick} variant="contained">{content}</Button>
    )
}