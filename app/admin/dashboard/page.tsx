"use client"
import React,{useState,useRef,useEffect} from "react";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';  
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import Sidebar from "../sidebar/page"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MovingIcon from '@mui/icons-material/Moving';
import Navbar from "../navbar/page"
import { AreaChart, Area,BarChart, XAxis, YAxis, Bar, Tooltip, Legend} from "recharts";
import { PieChart, Pie} from "recharts";
import styles from"./feedback.module.css"


const dashboard: React.FC  = () => {
  const mockTransactions = [
    {
      txId: "01",
      user: "johndoe",
      date: "2021-09-01",
      comment: "good job",
    },
    {
      txId: "02",
      user: "jackdower",
      date: "2022-04-01",
     comment: "i like the reservation",
    },
    {
      txId: "03",
      user: "aberdohnny",
      date: "2021-09-01",
      comment: "great work",
    },
    {
      txId: "04",
      user: "goodmanave",
      date: "2022-11-05",
      comment: "awesome",
    },
    {
      txId: "05",
      user: "stevebower",
      date: "2022-11-02",
      comment: "good work",
    },
    {
      txId: "06",
      user: "aberdohnny",
      date: "2021-09-01",
      comment: "good work",
    },
    {
      txId: "07",
      user: "wootzifer",
      date: "2019-04-15",
      comment: "good work",
    },
    {
      txId: "08",
      user: "jackdower",
      date: "2022-04-01",
      comment: "good work",
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
  
  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 }
  ];

  const data = [
    {
      "year": "2016",
      "Marcedes": 4000,
      "BWM": 2400
    },
    {
      "year": "2017",
      "Marcedes": 3000,
      "BWM": 1398
    },
    {
      "year": "2018",
      "Marcedes": 2000,
      "BWM": 9800
    },
    {
      "year": "2019",
      "Marcedes": 2780,
      "BWM": 3908
    },
    {
      "year": "2020",
      "Marcedes": 1890,
      "BWM": 4800
    },
    {
      "year": "2021",
      "Marcedes": 2390,
      "BWM": 3800
    },
    {
      "year": "2022",
      "Marcedes": 3490,
      "BWM": 4300
    }
  ]
  const bar = [
    {
        name: "Jan",
        update: 4000,
        new : 2400
    },
    {
        name: "Feb",
        update: 5000,
        new : 1500
    },
    {
        name: "Mar",
        update: 6000,
        new : 3000
    },
    {
        name: "Apr",
        update: 6500,
        new : 4500
    },
    {
        name: "May",
        update: 7000,
        new : 2200
    },
    {
        name: "Jun",
        update: 8000,
        new : 3500
    },
    {
        name: "Jul",
        update: 7400,
        new : 5500
    },
  ];



  return (
    <div className="flex h-screen"> 
   <Sidebar/>

      {/* Main Content */}
 
      <div className="flex-1 bg-gray-100 p-4 ml-[300px]">
    
      <div><Navbar/></div>
      <Typography variant="h2" fontWeight="bold" style={{ color: '#000080' }}>
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

<div>
<div style={{ display: 'flex',  alignItems: 'center' }} >
  <Typography variant="h5" style={{ color: '#000080' , whiteSpace: 'nowrap' }}>Sales Activities</Typography>
  <Typography variant="h5" style={{ color: '#000080' ,  marginLeft: '400px',  whiteSpace: 'nowrap'}} >New accout by Month</Typography>
</div>

<div className="mt-[80px]">
<section className="my-4 px-4 ml-[-100px] ">
  <div className="w-[150px] h-[150px] rounded">
      <AreaChart width={600} height={230} data={data} 
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Marcedes" stroke="#5b21b6" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="BWM" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </div>
      </section>
      </div>
      <div>
      <section className=" my-4 px-40 ml-[350px] mt-[-170px]">
  <div className="w-[200px] h-[200px] bg-gray-700 rounded">
    
  <BarChart width={600} height={250} data={bar}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="update" fill="#8b5cf6" />
        <Bar dataKey="new" fill="#ddd6fe"/>
      </BarChart>

  </div>
</section>
</div>
<div className={styles.cont}>
            <Box
            className=" rounded-md shadow-md transition transform hover:scale-10 h-[350px] w-[400px] mt-[60px]"
          gridColumn="span 4"
          gridRow="span 2"
        
          overflow="auto">

<Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid `}
            className="bg-blue"
            p="15px"
          >
            <Typography variant="h5" fontWeight="600">
              Recent Feedbacks
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid `}
              p="15px"
            >
              <Box>
                <Typography
              
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography 
                className="text-blue">
                  {transaction.user}
                </Typography>
              </Box>
              <Box >{transaction.date}</Box>
              <Box
               className="text-blue"
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.comment}
              </Box>
            </Box>
          ))}
          </Box>
        </div>
<div className="ml-[450px] " style={{ marginTop: '-400px' }}>
<Typography variant="h5" style={{ color: '#000080' , whiteSpace: 'nowrap', marginLeft: '100px' }}>Analystics</Typography>
<div className={styles.pye}>
<PieChart width={1000} height={400} >
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
            <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
    </div>
    </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default dashboard;
