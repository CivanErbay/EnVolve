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
    const [resultByWeek, setResultByWeek] = useState([])

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
    const data3 =
        resultByWeek.map((singleWeekResult, index) => {
            return {name: `W${index + 1}`, uv: singleWeekResult, pv: 1.3, amt: 2.0}
        })
    ;


    //FETCH ALL SURVEYANSWER (WHOLE OBJECT)
    useEffect(() => {
        getSurveyAnswerListByClassId(schoolClassId).then(response => {
            setAllSurveyAnswers(response.map(singleResponse => {
                return {
                    ...singleResponse, localDate: new Date(singleResponse.localDate)
                }
            }));
        })

    }, [])


    //FILTER ALL RESPONSE INTO DATES
    useEffect(() => {
        if (allSurveyAnswers.length > 0) {




            const weekResults = []
            for (let i = 0; i < 5; i++) {
                weekResults.push(allSurveyAnswers.filter(result => {
                    return result.localDate.getTime() > new Date().getTime() - ((i + 1) * 7 * 24 * 60 * 60 * 1000) && result.localDate.getTime() < new Date().getTime() - (i * 7 * 24 * 60 * 60 * 1000)
                }));
            }

            //First Table
            console.log(weekResults)
            const lastWeekResponses = lastWeekResponseCalculator(weekResults[0]);


            //Third Table
            const fiveWeekResponses = []
            for (let i = 0; i < weekResults.length; i++) {
                fiveWeekResponses.push(allWeekResponseCalculator(weekResults[i]))
            }
            setResultByWeek(fiveWeekResponses)



        }
    }, [allSurveyAnswers])


    const allWeekResponseCalculator = (week) => {
        let responses = []
        for (let i = 0; i < week.length; i++) {
            for (let j = 0; j < week[i].questionList.length; j++) {
                responses.push(week[i].questionList[j].response)
            }
        }
        const sum = responses.reduce((curr, acc) => {
            return curr + acc
        })
        return sum / responses.length
    }

    const lastWeekResponseCalculator = (students) => {
        let finalResponses = [[], [], [], [], []]
            console.log(students)
            for (let j = 0; j < students.length; j++) {

                //Push all same QuestionResults int responsesByQuestion (eg. Student[0] - question[0], Student[1] - question[0].. etc
/*
                let responsesByQuestion = [];
*/

                for (let i = 0; i < students[j].questionList.length; i++) {
                    finalResponses[i].push(students[j].questionList[i].response)
                }
                //Add one to counter to switch to next question and push all result of one single Question into finalResponses
/*
                finalResponses.push(responsesByQuestion)
*/
            }
            // make avg from arrays inside finalresponses


        console.log(finalResponses)
        return finalResponses
    }


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


            <Typography style={{fontSize: "2.5em", fontWeight: "bold", padding: "0.25em", textAlign: "left"}}>LAST
                WEEK</Typography>
            <Box mt={-3}>
                <RadarChart cx={140} cy={140} outerRadius={60} width={300} height={250} data={data}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey="subject"/>
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#D9EFF9" fillOpacity={0.6}/>
                </RadarChart>
            </Box>


            <Box mt={4}>
                <Typography style={{
                    fontSize: "2.5em",
                    fontWeight: "bold",
                    padding: "0.25em",
                    textAlign: "left"
                }}>CHANGES</Typography>
                <Box mt={2} ml={-4}>
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
                <Typography style={{
                    fontSize: "2.5em",
                    fontWeight: "bold",
                    padding: "0.25em",
                    textAlign: "left"
                }}>OVERALL</Typography>
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
                                <stop stopColor="green" stopOpacity={1}/>
                                {/*offset={off}*/}
                                <stop stopColor="#D9EFF9" stopOpacity={1}/>
                                {/*offset={off}*/}
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)"/>
                    </AreaChart>
                </Box>
            </Box>


        </Box>
    )
}