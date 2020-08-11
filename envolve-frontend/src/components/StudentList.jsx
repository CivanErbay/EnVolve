import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {getClassById} from "../utils/fetch-utils";
import WhiteWrapper from "./wrapper/WhiteWrapper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export const StudentList = ({id}) => {

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
                <Grid container style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                }}>
                    {schoolClass.classmembers.map((member) =>
                        <Box boxShadow={3} style={{
                            margin: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1.1em",
                            width: "100%",
                            borderRadius: "10px",
                            color:"#F7F7F7",
                            backgroundColor: "#272635"
                        }}>
                            <Grid item xs={12}>
                                <Typography style={{textAlign: "left", fontSize: "1.3em", fontWeight: "700"}}
                                            key={member.student}> {member.student}  </Typography>
                            </Grid>
                            <Grid item xs={4} >
                                {member.activeStatus ?
                                    <span><b> {member.code}</b></span> :
                                    <img style={{height: "4vh", marginTop: "5px"}} src="/images/tick.svg"
                                         alt=""/>}
                            </Grid>
                        </Box>
                    )}     </Grid>
                <Typography><b>Note</b>: Click on a Student to copy the corresponding Code.</Typography>
            </WhiteWrapper>)
            }

        </>

    )
}