import Box from "@material-ui/core/Box";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { LineChart, Line } from 'recharts';
import BarChart from "recharts/lib/chart/BarChart";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "@material-ui/core/Tooltip";
import Legend from "recharts/lib/component/Legend";
import Bar from "recharts/lib/cartesian/Bar";

const useStyles = makeStyles((theme) => ({
    stretch: {
        height: "60vh",
    }

}));


export const Dashboard = () => {
    const data = [{
        name: 'Satisfaction', uv: 4000, pv: 2400, value: 24,
    },
        {
            name: 'Atmosphere', uv: 3000, pv: 1398, value: 22,
        },
        {
            name: 'Benefit', uv: 2000, pv: 9800, value: 22,
        },
        {
            name: 'Concentration', uv: 2780, pv: 3908, value: 20,
        },
        {
            name: 'Empowerment', uv: 1890, pv: 4800, value: 21,
        }];


    const classes = useStyles();

    return (
        <Box className={classes.stretch}>


            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />

            <Legend />
{/*
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
*/}
            <Bar dataKey="value" stackId="a" fill="#82ca9d" />
         {/*   <Bar dataKey="uv" fill="#ffc658" />*/}
            </BarChart>

        </Box>
    )
}