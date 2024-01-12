"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./charts.css"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
interface CarData {
    carCount: number;
  }

const CarDetails: React.FC = () => {
    const [carData, setCarData] = useState<CarData | null>(null);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/company/cars/1');
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 
  return (
    <div>
      <h1 className='owned' >Welcome To Your Companies DashBoard !</h1>
      {carData ? (
        <div>
          <p className='ownedd'>Owned Vehicles: {carData.carCount}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarDetails;
