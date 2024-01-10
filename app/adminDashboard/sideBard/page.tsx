"use client"
import React , {useState} from "react"
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import ContactMailIconOutlined from '@mui/icons-material/ContactMailOutlined';
import EventIconOutlined from '@mui/icons-material/EventOutlined';
import PublicIconOutlined from '@mui/icons-material/PublicOutlined';
import PieChartIconOutlined from '@mui/icons-material/PieChartOutlined';
import BarChartIconOutlined from '@mui/icons-material/BarChartOutlined';

const sideBard: React.FC = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className="col-span-3 bg-gray-800 text-white px-4 py-6">
    <List className="space-y-4">  
      <ListItem className="flex items-center px-4 py-2 hover:bg-gray-1000">
        <ListItemIcon className="flex-shrink-0">
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={<p>Admin</p>} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIconOutlined />
        </ListItemIcon>
        <ListItemText primary={<p>Dashboard</p>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMailIconOutlined />
        </ListItemIcon>
        <ListItemText primary="Contact Information" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EventIconOutlined />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PublicIconOutlined />
        </ListItemIcon>
        <ListItemText primary="Geography Chart" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PieChartIconOutlined />
        </ListItemIcon>
        <ListItemText primary="Pie Chart" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIconOutlined />
        </ListItemIcon>
        <ListItemText primary="Graph Chart" />
      </ListItem>
    </List>
    </div>

{/* Main Content */}
<div className="flex-1 bg-gray-100 p-6">
  {/* Your main content goes here */}
  <h1>Main Content</h1>
</div>
</div>
  );
};

export default sideBard;

    
 
