"use client"
import React, { useState } from 'react';
import './Vehicle.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ToysIcon from '@mui/icons-material/Toys';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompanyInfo from "./CompanyInfo"
import BasicDateRangePicker from "./Date"
import Locattion from "./Location"
import Time from "./Time"

interface Vehicle {
  name: string;
  images: string[];
  make: string;
  model: string;
  BodyType: number;
  color: string;
  price: number;
  Registration: string;
  Milage: string;
  Transmition: string;
  FuelType: string;
}

const company = {
    name: 'Eclipse Car Rental',
    description: 'Verified',
    industry: 'Manzah 6',
    founded: 2005,
    headquarters: 'Example City, ABC',
    profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg', 
};

  
const VehicleDetails: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [hoveredImage, setHoveredImage] = useState(vehicle.images[0]);

  const handleImageHover = (imageSrc: string) => {
    setHoveredImage(imageSrc);
  };

  return (
    <div className="vehicle-details">
      <div className="vehicle-images">
        {vehicle.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${vehicle.name}_${index}`}
            onMouseOver={() => handleImageHover(image)}
          />
        ))}
      </div>
      <div className="vehicle-display-image">
        <img src={hoveredImage} alt={vehicle.name} />
        <div className="vehicle-Name">
        <h2>{vehicle.name}</h2>
     </div>
      </div>
      <div className="specs">
        <div className="spec-details">
          <ul>
            <li>
            <DirectionsCarIcon />
              <strong>Make:</strong> {vehicle.make}

            </li>
            <li>
            <DirectionsCarIcon />
              <strong>Model:</strong> {vehicle.model}

            </li>
            <li>
            <ToysIcon />
              <strong>BodyType:</strong> {vehicle.BodyType}
            </li>
            <li>
            <InvertColorsIcon />
              <strong>Color:</strong> {vehicle.color}
            </li>
          </ul>
          <ul>
            <li>
            <MonetizationOnIcon />
              <strong>Price:</strong> {vehicle.price}
            </li>
            <li>
            <CalendarMonthIcon />
              <strong>Registration:</strong> {vehicle.Milage}
            </li>
            <li>
            <DirectionsCarIcon />
              <strong>Transmission:</strong> {vehicle.Transmition}
            </li>
            <li>
            <LocalGasStationIcon />
              <strong>Fuel Type:</strong> {vehicle.FuelType}
            </li>
          </ul>
        </div>
        <div>       <CompanyInfo company={company} />
  </div>
  <div></div>
      </div>
      <BasicDateRangePicker />
      <div> <Locattion/> </div>
      <div><Time/></div>
    </div>
    
  );
};
export default VehicleDetails;