"use client"

import { Typography } from "@mui/material"
import Sidebar from "../sidebar/page"
import React,{useState , useRef} from "react"
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";



const calendar =()=>{
  const calendarRef = useRef(null);
    return (
        <div className="flex h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
         
           <div>
           <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
             calendar
           </Typography>

      <FullCalendar
        innerRef={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin]}
        editable
         selectable
       />

 

          </div>
          </div>
          </div>
    )
}
export default calendar;