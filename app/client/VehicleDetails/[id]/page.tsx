"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navv from "../../../Home/navBar/page"
import "./details.css"
import PaidIcon from '@mui/icons-material/Paid';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ToysIcon from '@mui/icons-material/Toys';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import Location from "../location/Location"
import Date from "../date/Date"
import Time from "../time/Time"
import Company from "../companyInfo/CompanyInfo"
interface Car {
  id: string;
  brand: string;
  model: string;
  type: string;
  transmission: string;
  fuelType: string;
  registration: string;
  mileage: string;
  passengers: string;
  price: string;
  image: string[]; 
}

interface CarInfoProps {
  carId: string;
}

const CarInfo = ({ carId }: CarInfoProps) => {
  const [carInfo, setCarInfo] = useState<Car | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0); 

  var currentUrl = window.location.href;
    var endPoint=currentUrl.split("/")
    var i=endPoint[endPoint.length-1]
  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const response = await axios.get<Car>(`http://localhost:3000/api/car/${i}`);
        setCarInfo(response.data);
      } catch (error) {
        console.error('Error fetching car info:', error);
      }
    };

    fetchCarInfo();
  }, []);

  return (
    <div>
      {carInfo ? (
        <div>
          <Navv />
          <p className='name'>{carInfo.brand} {carInfo.model} </p>
          <div style={{ display: 'flex' }}>
            <div>
                <p className='infos'> <PaidIcon/> Price: {carInfo.price} DT/Day</p>
              <p className='infos'><DirectionsCarIcon/>Brand: {carInfo.brand}</p>
              <p className='infos'><DirectionsCarIcon/>Model: {carInfo.model}</p>
              <p className='infos'><ToysIcon/>Type: {carInfo.type}</p>
            </div>
            <div>
              <p className='info'> <DirectionsCarIcon/> Transmission: {carInfo.transmission}</p>
              <p className='info'><LocalGasStationIcon/> Fuel Type: {carInfo.fuelType}</p>
              <p className='info'><CalendarTodayIcon/> Registration: {carInfo.registration}</p>
              <p className='info'><AddRoadIcon/> Mileage : {carInfo.mileage}</p>
              <Location/>
              <Date/>
              <Time/>
              <Company/>

            </div>
          </div>
          {carInfo.image && carInfo.image.length > 0 && (
            <div>
              <div style={{ display: 'flex' }}>
                <div className='carimages' >
                  {carInfo.image.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      className='carImageItem'
                      alt={`Car ${index + 1}`}
                      style={{ width: '250px' }}
                      onMouseOver={() => setHoveredIndex(index)}
                    />
                  ))}
                </div>
                <div>
                  {hoveredIndex !== null && (
                    <img
                      src={carInfo.image[hoveredIndex]}
                      alt={`Car ${hoveredIndex + 1}`}
                      style={{ width: '800px', height: 'auto' }}
                      id='mainimage'
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarInfo;