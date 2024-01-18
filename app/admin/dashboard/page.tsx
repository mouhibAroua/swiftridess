"use client"
import React,{useState} from "react";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import Sidebar from "../sidebar/page"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MovingIcon from '@mui/icons-material/Moving';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
const dataa = [
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
      
      <nav className="flex items-center justify-end bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="search-box flex items-center">
    <button className="btn-search"><i className="fas fa-search"></i></button>
    <input type="text" className="input-search" placeholder="Type to Search..."/>
    <SearchIcon className="ml-2"/>
    <button><ChatIcon className="ml-2" /></button>
    <button>  <CircleNotificationsIcon className="ml-2" /></button>
   
  </div>
  
</nav>
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
          <ShoppingCartOutlinedIcon color="primary" />
            <div className="flex items-center">
              <Typography variant="h4" fontWeight="bold">456,361</Typography>

            </div>
            <Typography variant="h6" gutterBottom>
               Sales Obtained
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
          variant="h5"
          fontStyle="italic" style={{ marginLeft: 'auto' }} sx={{ color: "green" }}>
          <MovingIcon color="success"/>21%
        </Typography>
        </Box>
          </Box>

          {/* New Orders */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <PersonAddOutlinedIcon color="primary"/>
          <Typography variant="h4" fontWeight="bold">32,441</Typography>
            <Typography variant="h6" gutterBottom>
              New Orders
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
          variant="h5"
          fontStyle="italic" style={{ marginLeft: 'auto' }} sx={{ color: "green" }}>
         <MovingIcon color="success"/>5%
        </Typography>
        </Box>
          </Box>

          {/* Total Users */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <PeopleOutlineOutlinedIcon color="primary" />
          <Typography variant="h4" fontWeight="bold">56%</Typography>
          
            <Typography variant="h6" gutterBottom>
              Bounce Rate
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
          variant="h5"
          fontStyle="italic" style={{ marginLeft: 'auto' }} sx={{ color: "red" }}>
          <TrendingDownIcon sx={{ color: "red" }} />7%
        </Typography>
        </Box>
          </Box>

          {/* Another Box */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <EmailIcon color="primary"/>
          <Typography variant="h4" fontWeight="bold">12,789</Typography>
          
            <Typography variant="h6">
              Email Sent
            </Typography>
            <Box display="flex" justifyContent="space-between" mt="2px">
            <Typography
          variant="h5"
          fontStyle="italic" style={{ marginLeft: 'auto' }} sx={{ color: "green" }}>
          <MovingIcon color="success"/>14%
        </Typography>
        </Box>
        </Box>

<div className="ml-[40px]">
<Typography variant="h4" style={{ color: '#000080' }}>Weekly Recap</Typography>
        
  
          <Box className={`p-4 bg-white rounded-md shadow-md`} style={{ width: chartWidth, height: chartHeight }}>
          <LineChart
            width={chartWidth}
            height={chartHeight}
            data={dataa}
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
