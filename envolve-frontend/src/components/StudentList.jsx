import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";
import WhiteWrapper from "./wrapper/WhiteWrapper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Clipboard from 'react-clipboard.js';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    studentBox: {
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.1em",
        width: "100%",
        borderRadius: "10px",
        color: "#F7F7F7",
        backgroundColor: "#272635"
    }

}));


export const StudentList = ({id}) => {
    const classes = useStyles();
    const [schoolClass, setSchoolClass] = useState(null)


    useEffect(() => {
        getClassById(id).then(response => {
            setSchoolClass(response)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (


        <>

            {schoolClass && (<WhiteWrapper>
                <Grid container className={classes.center}>
                    {schoolClass.classmembers.map((member) =>

                        <Box boxShadow={3} className={classes.studentBox}>
                            <Grid item xs={12}>
                                <Typography style={{textAlign: "left", fontSize: "1.3em", fontWeight: "700"}}
                                            key={member.student}> {member.student}  </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                {member.activeStatus ?
                                    <Box style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%"
                                    }}>
                                        <Clipboard
                                        style={{backgroundColor: "#272635", borderRadius: "15px", marginRight: "10px"}}
                                        data-clipboard-text={member.code}>
                                        <img style={{height: "4vh", marginTop: "5px"}} src="/images/copy.svg" alt=""/>

                                    </Clipboard><span><b>{member.code}</b></span> </Box> :
                                    <img style={{height: "4vh", marginTop: "5px"}} src="/images/tick.svg"
                                         alt=""/>}
                            </Grid>
                        </Box>
                    )}     </Grid>
                <Typography><b>Note</b>: The green check mark indicates that the student has already
                    participated.</Typography>
            </WhiteWrapper>)
            }

        </>

    )
}