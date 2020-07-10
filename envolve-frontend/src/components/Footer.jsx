import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,

    },
    footerProps: {
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export default function Footer()
{
    const classes = useStyles();

    return (
        <div className={classNames(classes.stickToBottom, classes.footerProps)}>
            <Button>Terms</Button>
            <Button><Link className={classes.link} to="/login">Teacher?</Link></Button>
        </div>
    )
}