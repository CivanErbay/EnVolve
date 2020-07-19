import React from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        position: 'fixed',
        bottom: '30px',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none'
    }
}));

export default function BackButton() {
    const classes = useStyles();
    return (

        <Button><
            Link className={classNames(classes.stickToBottom, classes.link)} to="/overview">Back</Link>
        </Button>

    )
}