import React, { useState } from 'react';
import axios from 'axios';
const ReservationForm: React.FC = () => {
  const userId=localStorage.getItem("id")
  var currentUrl = window.location.href;
  var endPoint=currentUrl.split("/")
  var i=endPoint[endPoint.length-1]
  const reservation=()=>{
    axios.post(`http://localhost:3000/api/company/reservation/${userId}/${i}`).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
  }

  return (
  <button onClick={()=>reservation()}>Reserve now</button>
  );
};

export default ReservationForm;
