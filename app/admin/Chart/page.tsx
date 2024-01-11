"use client"
import { Typography } from "@mui/material";
import React , { PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Monday',

      sales: 2400,
      amt: 2400,
    },
    {
      name: 'Tuesday',
     sales: 1398,
      amt: 2210,
    },
    {
      name: 'Thursday',
      sales: 9800,
      amt: 2290,
    },
    {
      name: 'Wedsnesday',
      sales: 3908,
      amt: 2000,
    },
    {
      name: 'Friday',
      sales: 4800,
      amt: 2181,
    },
    {
      name: 'Saturday',
      sales: 3800,
      amt: 2500,
    },
    {
      name: 'Sunday',
      sales: 4300,
      amt: 2100,
    },
  ];

const Chart =()=>{

    return (
        <div>
        <Typography variant="h2" fontWeight="bold" style={{ color: '#000080' }}>Weekly Recap</Typography>
        <LineChart width={1050} height={450} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className="bg-blue">
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
</LineChart>
      </div>
    )
}
export default Chart;