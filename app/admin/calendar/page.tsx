"use client"

import { Typography } from "@mui/material"
import Sidebar from "../sidebar/page"
import React,{useState } from "react"
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Box,
  List,
  ListItem,
  ListItemText
} from "@mui/material";


const calendar =()=>{

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected:any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected:any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

    return (
        <div className="flex h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
         
           <div>
           <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
             calendar
           </Typography>
           <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          // backgroundColor={primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  // backgroundColor:greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>

                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          </Box>
          </Box>

<Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventsSet={(events) => setCurrentEvents(events)}
            // initialEvents={[
            //   {
            //     id: "12315",
            //     title: "All-day event",
            //     date: "2022-09-14",
            //   },
            //   {
            //     id: "5123",
            //     title: "Timed event",
            //     date: "2022-09-28",
            //   },
            // ]}
          />
        </Box>
        </div>
      </div>
    </div>

    )
}
export default calendar;