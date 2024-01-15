"use client"
import React from "react";
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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
  
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
    
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>

    </div>
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
