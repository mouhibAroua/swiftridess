"use client"
import React from "react";
import { Typography } from "@mui/material";
import Sidebar from "../sidebar/page"

const client =()=>{
    return (
        <div className="flex h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
           {/* Your main content goes here */}
           <div>
           <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
             client 
           </Typography>
           </div>
           </div>
           </div>
    )
}
export default client;