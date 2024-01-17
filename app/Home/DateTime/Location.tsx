"use client";
import React, { useState, useEffect, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "./location.css";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { FaPerson } from "react-icons/fa6";
import {Icon} from 'leaflet';

export default function MultipleSelectChip() {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [compData,setCompData] =useState<null>([])


  const legalIcon = new Icon ({
    iconUrl : 'https://icon-library.com/images/rent-car-icon/rent-car-icon-3.jpg',
    iconSize : [35,35], 
    iconAnchor : [22,94], 
    popupAnchor : [-3, -76] 

  })
  const userMarker = new Icon ({
    iconUrl : 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize : [35,35], 
    popupAnchor : [-3, -76] 

  })
  const mapContainerRef = useRef(null);

  const [markerPos, setMarkerPos] = useState({
    lat: 55.702868,
    lng: 37.530865,
  })
  const [fixedMarkerPos, setFixedMarkerPos] = useState({
    lat: 36.890308,
    lng: 10.180120,
  })

  useEffect(() => {
    axios.get('http://localhost:3000/api/company/getall').then((res) => {
        setCompData(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mapContainerRef.current && !mapContainerRef.current.contains(e.target)) {
        setShowMap(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function LocationMarker() {
    const [position, setPosition] = useState<null>(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <div>
        <Marker  position={position} icon={userMarker} >
       <Popup >You are here</Popup>
       </Marker>
      </div>
    );
  }

  return (
   <div ref={mapContainerRef}>
      <FormControl sx={{ m: 1, width: 250, position: "relative", top: "-335px", right: "-40px" }}>
        <button className='mt-2 border rounded w-[230px] h-[55px]' onClick={() => setShowMap(!showMap)}>location</button>
        {showMap && (
          <MapContainer className='' center={{ lat: 36.859108, lng: 10.190414 }} zoom={16} style={{ height: '400px', width: '600px' }} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {compData.map((company,i) => (
                <Marker key={i} position={{ lat: company.laltitude, lng: company.longtitude }} icon={legalIcon}>
                <Popup>{company.companyName}</Popup>
              </Marker>
            ))}
            
            <LocationMarker />
          </MapContainer>
        )}
      </FormControl>
    </div>
  );
}
