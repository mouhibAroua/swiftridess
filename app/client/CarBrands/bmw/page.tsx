"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';  
import "../brands.css"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Nav from "../../../Home/navbar/page"

const CarList: React.FC = () => {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/car/getallcars');
        setCars(response.data.filter((car: any) => car.brand === 'BMW'));
      } catch (error) {
        console.error('Error fetching car data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav/>
      <h1
      >
        BMW Vehicles
      </h1>
      <div className="car-container">
        {cars.map((car) => (
          <div key={car.idcars} className="car-box">
            <img
              src={car.image[0]}
              alt={`${car.brand} ${car.model}`}
              className="car-image"
            />
            <div className="car-details">
              <h3>
                {car.brand} {car.model}
              </h3>
              <h3 style={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineIcon /> {car.passengers}
                <span style={{ margin: "07px" }}></span>
                <LocalGasStationIcon /> {car.fuelType}
                <span style={{ margin: "07px" }}></span>
                <DirectionsCarIcon /> {car.type}
              </h3>
              <h3 style={{ display: "flex", alignItems: "center", position:"relative",top:"50px" }} >{car.price} DT/Day</h3>
              <Stack spacing={2} direction="row">
              <Link target="_blank" href={`/client/VehicleDetails/${car.idcars}` }>
              <Button className = "but"size="small" variant="contained" style={{ backgroundColor: '#C0C0C0', color: 'black'  }}>Rent Now</Button>
      </Link>
      </Stack>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CarList;
