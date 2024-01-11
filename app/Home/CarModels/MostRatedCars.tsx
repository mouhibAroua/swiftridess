"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopRatedCars.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';  

interface Car {
  brand: string;
  model: string;
  rating: number;
  image: string;
  fuelType: string;
  passengers: string;
  type: string;
  price: string;
  idcars:number;
}


const TopRatedCars: React.FC = () => {
  const [topRatedCars, setTopRatedCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchTopRatedCars =   async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/car/getallcars"
        );
        const carsData: Car[] = response.data;
        const sortedCars = carsData.sort((a, b) => b.rating - a.rating);

        const top3RatedCars = sortedCars.slice(0, 3);
        setTopRatedCars(top3RatedCars);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopRatedCars();
  }, []);

  return (
    <div>
      <h2
        id="texting"
        className="text-3xl font-bold mb-4 text-center text-gold-100"
      >
        Top Rated Cars
      </h2>
      <div className="car-container">
        {topRatedCars.map((car) => (
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
              <Link target="_blank" href={`client/VehicleDetails/${car.idcars}` }>
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

export default TopRatedCars;
