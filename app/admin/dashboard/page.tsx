"use client"
import React from "react";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import Sidebar from "../sidebar/page"

// interface sidebarProps{
//   class:string;
// }

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

const dashboard: React.FC  = () => {

    const chartWidth = 1100;
    const chartHeight = 450;

  return (
    <div className="flex h-screen">
   <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
    
      <div>
      <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
        DASHBOARD
      </Typography>
     
      <Typography variant="h5">
         Welcome to your Dashboard 
      </Typography>

      
      <div className="flex-grow p-10">
        <Typography variant="h4" className="mb-6 text-gray-750">
          General Report
        </Typography>

        <div className="grid grid-cols-4 gap-6">
          {/* Item Sales */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <ShoppingCartOutlinedIcon />
            <div className="flex items-center">
              <Typography variant="h3">123</Typography>

            </div>
            <Typography variant="h6" gutterBottom>
              Item Sales
            </Typography>
          </Box>

          {/* New Orders */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <PersonAddOutlinedIcon/>
          <Typography variant="h4">45</Typography>
            <Typography variant="h6" gutterBottom>
              New Orders
            </Typography>
            
          </Box>

          {/* Total Users */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <PeopleOutlineOutlinedIcon />
          <Typography variant="h4">567</Typography>
          
            <Typography variant="h6" gutterBottom>
              Total Users
            </Typography>
            
          </Box>

          {/* Another Box */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <TimeToLeaveOutlinedIcon />
          <Typography variant="h4">789</Typography>
          
            <Typography variant="h6" gutterBottom>
              Total Vehicles
            </Typography>
            
          </Box>
          
<div className="ml-[40px]">
<Typography variant="h4" style={{ color: '#000080' }}>Weekly Recap</Typography>
          <Box className={`p-4 bg-white rounded-md shadow-md`} style={{ width: chartWidth, height: chartHeight }}>
          <LineChart
            width={chartWidth}
            height={chartHeight}
            data={data}
            margin={{ top: 5, right: 50, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </Box>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default dashboard;
