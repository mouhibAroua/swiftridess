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

         <div className="container mx-auto mt-5">
      <div className="p-4">
        {/* Profile Picture */}
        <img
          src="https://i.pinimg.com/236x/ec/41/b7/ec41b76eb7cee1e7a38a641c6269797d.jpg" 
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto"
        />
      </div>
      <div className="p-4 text-center">
        {/* User Info */}
        <h1 className="text-2xl font-bold">Nourhen abidi</h1>
        <p className="text-gray-600">Admin</p>
        {/* Other User Details */}
      
      </div>

      <div className="p-4">
        {/* User Posts */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <p className="text-gray-800 center">Hello, this is my first post!</p>
          {/* Add more post details as needed */}
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>

      </div> 
      </div>
      </div>
    )
}
export default profile;