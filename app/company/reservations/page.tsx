"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./reserv.css"
import Sidebar from '../DashBoard/Sidenav';
import Conf from "./conf"
interface ReservationData {
  currentDateTime: string;
  user: {
    fullName: string;
    phoneNumber: number;
    email: string;
  };
  car: {
    idcars: number;
    brand: string;
    model: string;
  };
}

const ReservationComponent: React.FC = () => {
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);
  const idcompany = localStorage.getItem('idcompany')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/company/reservation/${idcompany}`);
        console.log('Response:', response.data); // Log the response data
        setReservationData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  

   return (
    <div className="reservation-container">
            <Sidebar/>
      {reservationData ? (
        <div className="info-section">
          <h2 className='title'>Reservation Information</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            
  <p className='elements'>Full Name:</p>
  <p className='elements'>Phone Number:</p>
  <p className='elements'>Email:</p>
  <p className='elements'>Car Serial:</p>
  <p className='elements'>Car Brand:</p>
  <p className='elements'>Car Model:</p>
  <p className='elements'>Reservation Date:</p>
  <p className='elements'>Return Date:</p>      <div><Conf/></div>
</div>


          {reservationData.map((reservation, index) => (
            <div key={index}>
          <table style={{ display: 'flex',textAlign:"center" }} >
            
                <td id='name'>{reservation.user.fullName}</td>
                <td id='phone' >{reservation.user.phoneNumber}</td>
                <td id='email' >{reservation.user.email}</td>
                <td id='serial' >{reservation.car.serialCar}</td>
                <td id='brand' >{reservation.car.brand}</td>
                <td id='model' >{reservation.car.model}</td>
                <td id='current' >{reservation.currentDateTime}</td>
                <td id='return'>{reservation.returnDate}</td>

          </table>
        </div>
         ))}
         </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
};

export default ReservationComponent;
