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
                <Grid container spacing={1}  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                }}>
                    {schoolClass.classmembers.map((member) =>
                        <Box style={{
                            margin: "1em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            border: "solid",
                            borderWidth: "1px",
                            padding: "1.1em",
                            borderRadius: "10px"
                        }}>
                            <Grid item sm={3}>
                                <Typography style={{textAlign: "left", fontSize: "1.3em", fontWeight: "700"}}
                                            key={member.student}> {member.student}  </Typography>
                            </Grid>
                            <Grid item sm={3} >
                                {member.activeStatus ?
                                    <span><b> {member.code}</b></span> :
                                    <img style={{height: "4vh", marginTop: "5px"}} src="/images/tick.svg"
                                         alt=""/>}
                            </Grid>
                        </Box>
                    )}     </Grid> </WhiteWrapper>)
            }

        </>

    )
}