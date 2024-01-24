"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./allvehicles.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from "next/link";


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
  const [allCars, setAllCars] = useState<Car[]>([]);
  
  const idcompany = typeof window == 'object' ? window.localStorage.getItem("idcompany") : null
  console.log("zzz", typeof window);
  console.log("rrrr",idcompany);
  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/company/allcars/${idcompany}`);
        setAllCars(response.data.carss); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchAllCars();
  }, []);

  const remove=(idcars:any)=>{
    axios.delete(`http://localhost:3000/api/car/delete/${idcars}`).then(()=>{
         
      })
      .catch((err)=>{
          console.log(err)
      })
}
  
console.log(allCars)
  return (
    <div>
      <h2
        id="texting"
        className="text-3xl font-bold mb-4 text-center text-gold-100"
      >
      </h2>
      <div className="car-container"> 
        {allCars.map((car) => (
          <div key={car.idcars} className="car-box">
            
            <img
              src={car.image[0]}
              alt={`${car.brand} ${car.model}`}
              className="car-image"
            />
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" value="" type="checkbox"/>
              <div className="peer ring-2 ring-black bg-red rounded-full outline-none duration-500 after:duration-300 w-16 h-5  shadow-inner peer-checked:bg-Teal-700  peer-focus:outline-none peer-focus:ring-4  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4   peer-checked:after:translate-x-14">
              </div>
            </label>
            
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
              <h3 style={{ display: "flex", alignItems: "center", position:"relative",top:"10px" }} >{car.price} DT/Day</h3>
              <div className=" mt-3 grid grid-cols-2 gap-5">
              <Link target = "_blank" href={`/company/updateCar/${car.idcars}`}>
              <button className="edit-button">
              
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                  
              </button>
              </Link>
              <button className="delete-button" onClick={()=>remove(car.idcars)} >
                  <svg className="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
              </button>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TopRatedCars;  