"use client "
import React from "react"
import Sidebar from "../sidebar/page"
import {Typography } from '@mui/material';


const profile:React.FC  = ()=>{
    return (
      <div className="flex h-screen">
      <Sidebar/>
   
         {/* Main Content */}
         <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
         {/* Your main content goes here */}
         <div>
         <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
           Profile
         </Typography>


         <div className="flex flex-col items-end p-4 bg-gray-200 rounded-lg shadow-md">
  <div className="w-80 h-80 overflow-hidden rounded-full mb-100">
    <img src="profile-picture.jpg" alt="Profile" className="w-full h-full object-cover" />
  </div>
  <div className="text-right">
    <h3 className="text-lg font-semibold">Admin Name</h3>
    <p>Followers: 100</p>
    <p className="text-sm text-gray-600">About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>

         {/* <div className="admin-profile-box">
  <div className="profile-picture-container">
    <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
  </div>
  <div className="profile-info">
    <h3>Admin Name</h3>
    <p>Followers: 100</p>
    <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div> */}

      </div> 
      </div>
      </div>
    )
}
export default profile;