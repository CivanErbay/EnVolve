import Box from "@material-ui/core/Box";
import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RadarChart from "recharts/lib/chart/RadarChart";
import {
    Area,
    AreaChart,
    Bar,
    CartesianGrid,
    Legend,
    PolarAngleAxis,
    PolarGrid,
    Radar,
    ReferenceLine,
    XAxis,
    YAxis
} from "recharts";
import Typography from "@material-ui/core/Typography";
import BarChart from "recharts/lib/chart/BarChart";
import {getSurveyAnswerListByClassId} from "../utils/survey-fetch-utils";


const useStyles = makeStyles((theme) => ({
    stretch: {
        fontSize: "0.75em",
    },

}));


export const Dashboard = ({schoolClassId}) => {

    const classes = useStyles();
    const [allSurveyAnswers, setAllSurveyAnswers] = useState([]);
    const [overallResult, setOverallResult] = useState([])

    const data = [
        {subject: 'Atmosphere', A: 120, B: 110, fullMark: 150},
        {subject: 'Empowerment', A: 98, B: 130, fullMark: 150},
        {subject: 'Concentration', A: 86, B: 130, fullMark: 150},
        {subject: 'Benefit', A: 99, B: 100, fullMark: 150},
        {subject: 'Helpfulness', A: 85, B: 90, fullMark: 150},

    ];
    const data2 = [
        {name: 'AT', last: 4, current: 2.4, amt: 2.4},
        {name: 'EM', last: -3, current: 1.3, amt: 2.2},
        {name: 'CO', last: -2, current: -4.8, amt: 2.2},
        {name: 'BE', last: 2.7, current: 3.9, amt: 2.0},
        {name: 'HE', last: -1.8, current: 4.8, amt: 2.1},

    ];
    const data3 = [
        {name: 'W1', overall: overallResult, pv: overallResult, },
    /*    {name: 'W2', uv: 3, pv: 1.3, amt: 2.2},
        {name: 'W3', uv: -1, pv: 9.8, amt: 2.2},
        {name: 'W4', uv: 5, pv: 3.9, amt: 2},
        {name: 'W5', uv: -2, pv: 4.8, amt: 2.1},
        {name: 'W6', uv: -2.5, pv: 3.8, amt: 2.2},
        {name: 'W7', uv: 3.4, pv: 4.3, amt: 2.1},*/
    ];



    useEffect(() => {
        getSurveyAnswerListByClassId(schoolClassId).then(response => {
         setAllSurveyAnswers(response.map(singleResponse => {
                return {
                    ...singleResponse, localDate: new Date (singleResponse.localDate)
                }
            }));
        })
    },[])



    useEffect(() => {
        let tempOverall = []

        for(let i = 0; i < allSurveyAnswers.length; i++) {
            for(let j = 0; j< allSurveyAnswers[i].questionList.length; j++) {
               tempOverall.push(allSurveyAnswers[i].questionList[j].response)
            }
        }
        if (tempOverall.length > 0) {
            const sum = tempOverall.reduce((acc, curr) => {
                return acc + curr
            });

            let average = sum/tempOverall.length;
            const finalAverage = Math.round(average * 10) / 10;
            console.log(finalAverage)
            setOverallResult(finalAverage)
        }
    },[allSurveyAnswers])


 //Result last 7 Days
console.log(allSurveyAnswers.filter((result)=> {
    return result.localDate.getTime() > new Date().getTime() - (7 * 24 * 60 * 60 * 1000)

} ))
    //Result between 7 and 14 days
console.log(allSurveyAnswers.filter((result)=> {
    return result.localDate.getTime() > new Date().getTime() - (14 *24*60*60*1000) && result.localDate.getTime() < new Date().getTime() - (7 * 24 * 60 * 60 * 1000)
} ))




/*    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));

        if (dataMax <= 0){
            return 0
        }
        else if (dataMin >= 0){
            return 1
        }
        else{
            return dataMax / (dataMax - dataMin);
        }
    }

    const off = gradientOffset();*/

    return (
        <Box color={"secondary"} className={classes.stretch}>

            {allSurveyAnswers.length > 0 && console.log(allSurveyAnswers[0].questionList[0].response)}

            <Typography style={{fontSize: "2.5em", fontWeight: "bold", padding: "0.25em", textAlign: "left"}}>LAST WEEK</Typography>
            <Box mt={-3}>
            <RadarChart cx={140} cy={140} outerRadius={60} width={300} height={250} data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject"/>
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#D9EFF9" fillOpacity={0.6}/>
            </RadarChart>
            </Box>


            <Box mt={4}>
            <Typography style={{fontSize: "2.5em", fontWeight: "bold", padding: "0.25em" , textAlign: "left"}}>CHANGES</Typography>
            <Box mt={2} ml={-4} >
                <BarChart width={322} height={300} data={data2}
                          margin={{top: 5, right: 1, left: 1, bottom: 5}}>
                    <CartesianGrid strokeDasharray="2 2"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Legend/>
                    <ReferenceLine y={0} stroke='#000'/>
                        <Bar dataKey="last" fill="#272635"/>
                        <Bar dataKey="current" fill="#82ca9d"/>
                </BarChart>
            </Box>
            </Box>

            <Box mt={6}>
                <Typography style={{fontSize: "2.5em", fontWeight: "bold", padding: "0.25em", textAlign: "left"}}>OVERALL</Typography>
                <Box mt={2} ml={-4}>
                <AreaChart
                    width={350}
                    height={300}
                    data={data3}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[0, 5]}/>

                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="green" stopOpacity={1}/> {/*offset={off}*/}
                            <stop stopColor="#D9EFF9" stopOpacity={1}/> {/*offset={off}*/}
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="overall" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </Box>
            </Box>


        </Box>
    )
}