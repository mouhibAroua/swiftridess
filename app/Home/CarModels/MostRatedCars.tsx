"use client";
import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import "./TopRatedCars.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';  
import { motion } from "framer-motion";
import fadeIn from '../AboutUs/fadeIn';

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
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);
  const scrollDown = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDown.current) {
        const down = scrollDown.current.getBoundingClientRect();
        const vs = down.top < window.innerHeight
        setAnimationTriggered(vs);
      }
    };
    window.addEventListener('scroll', handleScroll);

  }, []);
  return (
    <motion.div 
    ref={scrollDown}
        variants={fadeIn('up', 0.4)}
         initial='hidden'
        animate={animationTriggered ? 'show' : 'hidden'}
    >
      <h1
        id="texting"
        className="text-3xl font-bold mt-10  text-center text-gold-100"
      >
        Top Rated Cars
        <hr className="border-t-4 border-oronge-500 mb-4 w-[240px] ml-[620px]"/> 
      </h1>
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
    </motion.div >
  );
};

export default TopRatedCars;
