// "use client"
// import React,{useState , useRef} from "react"
// import FullCalendar from "@fullcalendar/react";
// import formatDate from "@fullcalendar/common"
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import {
//     Box,
//     List,
//     ListItem,
//     ListItemText,
//     Typography,
//   } from "@mui/material";
//   import EventClickArg  from '@fullcalendar/react';
//   import DateClickArg from '@fullcalendar/react';



//   const feedbacks=()=>{
//     const [currentEvents, setCurrentEvents] = useState([]);
  
//   const handleDateClick = (selected:DateClickArg) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();
//     if (title) {
//         calendarApi.addEvent({
//           id: `${selected.date}-${title}`,
//           title,
//           start: selected.date,
//           allDay: selected.allDay,
//         });
//       }
//     };

//     const handleEventClick = (selected:EventClickArg) => {
//         if (
//           window.confirm(
//             `Are you sure you want to delete the event '${selected.event.title}'`
//           )
//         ) {
//           selected.event.remove();
//         }
//       };

//   return (
// <h2></h2>
//   )
// // const feedbacks=()=>{
    
// //     const calendarRef = useRef(null);
// //     return (
// //       <FullCalendar
// //         innerRef={calendarRef}
// //         plugins={[timeGridPlugin, interactionPlugin]}
// //         editable
// //         selectable
// //       />
// //     );
//   };
 
// export default feedbacks