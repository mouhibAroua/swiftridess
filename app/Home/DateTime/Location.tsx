"use client";
import React, { useState, useEffect, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "./location.css";
import 'leaflet/dist/leaflet.css';

export default function MultipleSelectChip() {
  const [showMap, setShowMap] = useState<boolean>(false);

  const mapContainerRef = useRef(null);

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
  
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/1334px-Map_marker.svg.png" alt="" />
          <Popup  position={position}>You are here</Popup>

      </div>
    );
  }

  return (
    <div ref={mapContainerRef}>
      <FormControl sx={{ m: 1, width: 250, position: "relative", top: "-335px", right: "-40px" }}>
        <button className='mt-2 border rounded w-[230px] h-[55px]' onClick={() => setShowMap(!showMap)}>location</button>
        {showMap && (
          <MapContainer className='' center={{ lat: 36.890308, lng: 10.180120 }}
            zoom={16}
            style={{ height: '400px', width: '600px' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        )}
      </FormControl>
    </div>
  );
}
