import React, { useState } from 'react';
import axios from 'axios';
import AlertDialogSlide from './confirm';  // Import the AlertDialogSlide component
import "../Vehicle.css"
const ReservationForm: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const userId=localStorage.getItem("id")
  var currentUrl = window.location.href;
  var endPoint=currentUrl.split("/")
  var i=endPoint[endPoint.length-1]
  const reservation=()=>{
    axios.post(`http://localhost:3000/api/company/reservation/${userId}/${i}`).then(res=>{
      console.log(res)
      setDialogOpen(true);  // Open the dialog after successful reservation
    }).catch(err=>{
      console.error(err)
    })
  }

  return (
    <div>
      <button className="Buttonres" onClick={() => reservation()}>Reserve now</button>
      {isDialogOpen && <AlertDialogSlide />}
    </div>
  );
};
export default ReservationForm;
