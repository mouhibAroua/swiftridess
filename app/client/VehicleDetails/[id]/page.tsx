"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navv from "../../../Home/navbar/page";
import "./details.css";
import PaidIcon from "@mui/icons-material/Paid";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ToysIcon from "@mui/icons-material/Toys";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import Date from "../date/Date";
import Company from "../companyInfo/CompanyInfo";
import Foot from "../../../Home/footer/page";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Rating from "../rating/Rating"
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleThumbnailClick = (index) => {
    console.log("Selected Image Index:", index);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex =
        (selectedImageIndex - 1 + carInfo.image.length) % carInfo.image.length;
      setSelectedImageIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex + 1) % carInfo.image.length;
      setSelectedImageIndex(newIndex);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        handlePreviousImage();
        break;
      case 'ArrowRight':
        handleNextImage();
        break;
      default:
        break;
    }
  };
  var currentUrl = window.location.href;
  var endPoint = currentUrl.split("/");
  var i = endPoint[endPoint.length - 1];
  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const response = await axios.get<Car>(
          `http://localhost:3000/api/car/${i}`
        );
        console.log("Car Images:", response.data.image);
        setCarInfo(response.data);
      } catch (error) {
        console.error("Error fetching car info:", error);
      }
    };

    fetchCarInfo();
  }, []);

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0">
      {carInfo ? (
        <div>
          <Navv />
          <br/>
          <br/>
          <br/>
          <br/>

          <p className="name">
            {carInfo.brand} {carInfo.model}{" "}
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <p className="infos">
                <PaidIcon /> Price: {carInfo.price} DT/Day
              </p>
              <p className="infos">
                <DirectionsCarIcon />
                Brand: {carInfo.brand}
              </p>
              <p className="infos">
                <DirectionsCarIcon />
                Model: {carInfo.model}
              </p>
              <p className="infos">
                <ToysIcon />
                Type: {carInfo.type}
              </p>
            </div>
            <div>
              <p className="info">
                {" "}
                <DirectionsCarIcon /> Transmission: {carInfo.transmission}
              </p>
              <p className="info">
                <LocalGasStationIcon /> Fuel Type: {carInfo.fuelType}
              </p>
              <p className="info">
                <CalendarTodayIcon /> Registration: {carInfo.registration}
              </p>
              <p className="info">
                <AddRoadIcon /> Mileage : {carInfo.mileage}
              </p>
              <Company />
              <Date />
              <Rating />

            </div>
          </div>

          {carInfo.image && carInfo.image.length > 0 && (
            <div>
              <div style={{ display: "flex" }}>
                <img id="mainimage" src={carInfo.image[0]} alt={`Car 1`} />
                <div className="carimages">
                  {carInfo.image.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      className="carImageItem"
                      alt={`Car ${index + 1}`}
                      style={{ width: "250px", cursor: "pointer" }}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
                <Modal
                  open={selectedImageIndex !== null}
                  onClose={handleCloseModal}
                  center
                  classNames={{
                    modal: "custom-modal",
                  }}
                >
                  {selectedImageIndex !== null && (
                    <div>
                      <button onClick={handleCloseModal}></button>
                      <img
                        src={carInfo.image[selectedImageIndex]}
                        alt={`Car ${selectedImageIndex + 1}`}
                        style={{ width: "800px", height: "auto" }}
                      />
                    </div>
                  )}
                </Modal>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            {" "}
            <Foot />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarInfo;
