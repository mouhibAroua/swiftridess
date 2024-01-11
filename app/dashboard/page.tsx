"use client"
import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText,Menu,Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';


const dashboard: React.FC = () => {


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="col-span-3 bg-gray-800 text-white px-10 py-7">
        <List className="flex-col space-y-3">

        <div className="flex items-center ">
  <Typography variant="h6" className="mt-2 mr-40" style={{ color: 'grey' }}>
    ADMINS
  </Typography>
  <MenuOutlinedIcon />
</div>
          <ListItem className="flex items-center flex-col px-4 py-2 hover:bg-gray-1000">

            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
              src="https://cdn.discordapp.com/attachments/1150837767849390100/1192526352767791256/c286cbb1-fb30-4454-a545-a74b649a6fd9.jpg?ex=65a965b6&is=6596f0b6&hm=a117da4cb4984f13f0fafe5f57905a33f94d520645a93bfd8d398652ec4353a0&"
              alt="Bordered avatar" />

            <ListItemText primary={<p className="mt-2">NOURHEN </p>} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={<p>Dashboard</p>} />
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Data
            </Typography>
            <ListItem button >
            <ListItemIcon >
              <GroupOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Manage Team" />
          </ListItem>
          <ListItem button >
            <ListItemIcon >
              <ContactMailOutlinedIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Contact Information" />
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Details
            </Typography>
            <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
             Charts
            </Typography>
          <ListItem button>
            <ListItemIcon>
              <PublicOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Geography " />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PieChartOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Pie Chart" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartOutlinedIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Graph Chart" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShowChartOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Line" />
          </ListItem>
        </List>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
      {/* Your main content goes here */}
      <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
        DASHBOARD
      </Typography>
      <Typography variant="h2">
        ye Hala ye Hala 
        {/* Welcome to your Dashboard */}
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

              {/* < style={{ marginLeft: '8px' , color: '#FF9800' }} /> */}
            </div>
            <Typography variant="h6" gutterBottom>
              Item Sales
            </Typography>
          </Box>

          {/* New Orders */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
          <PersonAddOutlinedIcon/>
            <Typography variant="h6" gutterBottom>
              New Orders
            </Typography>
            <Typography variant="h4">45</Typography>
          </Box>

          {/* Total Users */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <Typography variant="h6" gutterBottom>
              Total Users
            </Typography>
            <Typography variant="h4">567</Typography>
          </Box>

          {/* Another Box */}
          <Box className="p-4 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <Typography variant="h6" gutterBottom>
              Total Vehicles
            </Typography>
            <Typography variant="h4">789</Typography>
          </Box>
        </div>
      </div>
    </div>
    </div>
  );
};

export default dashboard;
