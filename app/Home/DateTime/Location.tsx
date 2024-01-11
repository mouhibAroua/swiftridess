"use client";
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "./location.css";
import 'leaflet/dist/leaflet.css';
export default function MultipleSelectChip() {
  const [showMap, setShowMap] = useState<boolean>(false);

  function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null);
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
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250, position: "relative", top: "-335px", right: "-40px" }}>
        <InputLabel id="demo-multiple-chip">Location</InputLabel>
        <button id="select-multiple-chip" label="Chip" onClick={()=>setShowMap(!showMap)}>location</button>
      </FormControl>
      {showMap && (
        <MapContainer center={{ lat: 36.890308, lng: 10.180120 }} 
        zoom={16} 
        style={{ height: '400px', width: '700px' }}
        scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
}
