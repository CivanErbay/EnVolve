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
    XAxis,
    YAxis
} from "recharts";
import Typography from "@material-ui/core/Typography";
import BarChart from "recharts/lib/chart/BarChart";
import {getSurveyAnswerListByClassId} from "../utils/survey-fetch-utils";
import PolarRadiusAxis from "recharts/lib/polar/PolarRadiusAxis";


const useStyles = makeStyles((theme) => ({
    stretch: {
        fontSize: "0.75em",
    },

}));


export const Dashboard = ({schoolClassId}) => {

    const classes = useStyles();
    const [allSurveyAnswers, setAllSurveyAnswers] = useState([]);
    const [resultByWeek, setResultByWeek] = useState([])
    const [lastWeekResult, setLastWeekResult] = useState([])
    const [prevLastWeekResult, setPrevLastWeekResult] = useState([])
    const [keywordList, setKeywordList] = useState([])
    const [data, setData] = useState({data1: undefined, data2: undefined, data3: undefined})

    useEffect(() => {
        {
            const data1 =
                keywordList.map((keyword, index) => {
                    return {subject: keyword, A: lastWeekResult[index]}
                })

            const keywordListShortCapitalize = []
            keywordList.map(keyword => {
               let keywordShort = '';
                for(let i = 0; i < 4; i++) {
                  keywordShort += keyword[i].toUpperCase();
                }
                keywordListShortCapitalize.push(keywordShort)
            });


            const data2 =
                keywordListShortCapitalize.map((keyword, index) => {
                  return {name: keyword, lastWeek: prevLastWeekResult[index], currentWeek: lastWeekResult[index] }
                })

            const data3 =
                resultByWeek.map((singleWeekResult, index) => {
                    return {name: `W${index + 1}`, uv: singleWeekResult, pv: 1.3, amt: 2.0}
                })
            ;
            setData({data1, data2, data3})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keywordList])


    //FETCH ALL SURVEYANSWER (WHOLE OBJECT)
    useEffect(() => {
        getSurveyAnswerListByClassId(schoolClassId).then(response => {
            setAllSurveyAnswers(response.map(singleResponse => {
                return {
                    ...singleResponse, localDate: new Date(singleResponse.localDate)
                }
            }));
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

            //Get Keywords out of Questions
            const tempKeywordList = []
            allSurveyAnswers.map(singleSurveyAnswer => {
                    singleSurveyAnswer.questionList.map(singleQuestion => {
                      tempKeywordList.push(singleQuestion.keyWord)
                    })
            })
            setKeywordList(tempKeywordList)



            //First Table
            setLastWeekResult(lastWeekResponseCalculator(weekResults[0]));

            //Second Table
            setPrevLastWeekResult(lastWeekResponseCalculator(weekResults[1]))


            //Third Table
            const fiveWeekResponses = []
            for (let i = 0; i < weekResults.length; i++) {
                fiveWeekResponses.push(allWeekResponseCalculator(weekResults[i]))
            }
            setResultByWeek(fiveWeekResponses)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allSurveyAnswers])


    const allWeekResponseCalculator = (week) => {
        let responses = []

        for (let i = 0; i < week.length; i++) {
            for (let j = 0; j < week[i].questionList.length; j++) {
                responses.push(week[i].questionList[j].response)
            }
        }
        if (responses.length > 0) {
            const sum = responses.reduce((curr, acc) => {
                return curr + acc
            })

            return sum / responses.length
        }
        return null
    }

    const lastWeekResponseCalculator = (student) => {

        /*    let tempResponses = Array(student[0].questionList.length).fill([])*/
        let tempResponses = [[], [], [], [], []]
        for (let j = 0; j < student.length; j++) {
            for (let i = 0; i < student[j].questionList.length; i++) {
                tempResponses[i].push(student[j].questionList[i].response)
            }
        }

        let finalResponses = []

        for (let v = 0; v < tempResponses.length; v++) {
            finalResponses.push(average(tempResponses[v]))
        }
        return finalResponses

    }

    const average = (array) => {
        let sum = 0;
        for (let p = 0; p < array.length; p++) {
            sum += array[p];
        }
        return sum / array.length
    }


    return (
        <Box color={"secondary"} className={classes.stretch}>

            {data.data1 &&
            <>
                <Typography style={{fontSize: "2.5em", fontWeight: "bold", padding: "0.25em", textAlign: "left"}}>LAST
                    WEEK</Typography>
                <Box mt={-3}>
                    <RadarChart cx={140} cy={140} outerRadius={60} width={300} height={250} data={data.data1}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="subject"/>
                        <PolarRadiusAxis domain={[0, 5]}/>
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
                    <Box mt={2} ml={-6}>
                        <BarChart width={350} height={300} data={data.data2}
                                  margin={{top: 5, right: 1, left: 1, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis domain={[0, 5]}/>
                            <Legend/>
                            <Bar dataKey="lastWeek" fill="#39A4D1"/>
                            <Bar dataKey="currentWeek" fill="#82ca9d"/>
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
                            data={data.data3}
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
            </>
            }
        </Box>
    )
}