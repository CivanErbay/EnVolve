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
import {allWeekResponseCalculator, lastWeekResponseCalculator} from "../utils/calculations/dashboard-calc";
import {useMediaQuery} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    graphHeadlineMobile: {
        fontSize: "2em",
        fontWeight: "bold",
        padding: "0.25em",
        textAlign: "left"
    },
    graphHeadlineDesktop: {
        fontSize: "3em",
        fontWeight: "bold",
        padding: "0.25em",
        textAlign: "center",

    }

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


    //GET-FETCH
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

    const matches = useMediaQuery('(min-width:800px)');




    return (
        <Box mt={2} color={"secondary"} className={classes.center}>

            {data.data1 &&
            <>
                <Box mt={-3}>
                <Typography className={matches ? classes.graphHeadlineDesktop : classes.graphHeadlineMobile}>LAST
                    WEEK</Typography>

                    <RadarChart cx={matches ? 380 : 150} cy={ matches ? 220 : 110} outerRadius={matches ? 200 : 70} width={matches? 750: 300} height={matches? 450: 225} data={data.data1}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="subject"/>
                        <PolarRadiusAxis domain={[0, 5]}/>
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#D9EFF9" fillOpacity={0.6}/>
                    </RadarChart>
                </Box>


                <Box mt={6}>
                    <Typography className={matches ? classes.graphHeadlineDesktop : classes.graphHeadlineMobile}>CHANGES</Typography>
                    <Box mt={2} ml={-6}>
                        <BarChart width={ matches ? 700 : 350} height={matches ? 475 : 300} data={data.data2}
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

                <Box mt={matches ? 12 : 6}>
                    <Typography className={matches ? classes.graphHeadlineDesktop : classes.graphHeadlineMobile}>OVERALL</Typography>
                    <Box mt={2} ml={-4}>
                        <AreaChart
                            width={matches ? 700: 350}
                            height={matches ? 475 : 300}
                            data={data.data3}
                            margin={{top: 10, right: 30, left: 0, bottom: 0}}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis domain={[0, 5]}/>

                            <defs>
                                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                    <stop stopColor="green" stopOpacity={1}/>
                                    <stop stopColor="#D9EFF9" stopOpacity={1}/>
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