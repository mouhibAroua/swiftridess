import React, { useEffect, useState } from "react";
import axios from "axios";

const CarInfoComponent: React.FC = () => {
  const [reservationInfo, setReservationInfo] = useState<string | null>(null);
  var currentUrl = window.location.href;
  var endPoint = currentUrl.split("/");
  var i = endPoint[endPoint.length - 1];
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/car/${i}`);
      const reservedInfo = response.data.reserved;
      setReservationInfo(
        reservedInfo !== null
          ? `Vehicle Unavailable until ${new Date(
              reservedInfo
            ).toLocaleDateString()}`
          : "Vehicle is available"
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {reservationInfo !== null && (
        <div>
          {reservationInfo.includes("available") ? (
            <p className="true">{reservationInfo}</p>
          ) : (
            <p className="false">{reservationInfo}</p>
          )}
        </div>
      )}
    </div>
  );
};
export default CarInfoComponent;
