import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({

    link: {
        textDecoration: 'none',
        color: 'black',
        textTransform: 'none'
    }
}));

export default function BackButton() {
    const classes = useStyles();
    return (

        <Box pt={6} pb={2}>
        <Button><
            Link className={ classes.link} to="/overview">Back</Link>
        </Button>
        </Box>
    )
}