import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import "./date.css"
import ReservationForm from '../reservation/page'
const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pricePerDay, setPricePerDay] = useState<number | null>(null);
  var currentUrl = window.location.href;
    var endPoint=currentUrl.split("/")
    var i=endPoint[endPoint.length-1]
  useEffect(() => {
    const fetchCarPrice = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/car/${i}`);
        const carPrice = response.data.price;
        setPricePerDay(carPrice);
      } catch (error) {
        console.error('Error fetching car price:', error);
      }
    };

    fetchCarPrice();
  }, []); 

  const calculateTotal = () => {
    if (startDate && endDate && pricePerDay !== null) {
      const numberOfDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return numberOfDays;
    }
    return 0;
  };

  return (
    <div className='calander'>
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date | null) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
      />
      <div className='other'>
      <p id="days" style={{ marginBottom: '10px' }}>Days: {calculateTotal()}</p>
      <img className="imga" src="https://images2.imgbox.com/fc/97/c24stbXg_o.png" alt="">
      </img>
      <p id="priceday" style={{ marginBottom: '10px' }}>Price/Day: {pricePerDay} DT</p>
      </div>
      
      <div>
        {pricePerDay !== null && (
    <p className='totals' style={{ marginTop: '20px',position:"relative",top:"280px",right:"730px" }}>Total: ${calculateTotal() * pricePerDay}</p>
    )}
    <div>    
      <ReservationForm/>
    </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
