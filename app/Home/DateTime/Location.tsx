"use client";
import React, { useState, useEffect, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents,Tooltip } from 'react-leaflet';
import "./location.css";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { FaPerson } from "react-icons/fa6";
import {Icon} from 'leaflet';
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { useRouter } from 'next/navigation';

export default function MultipleSelectChip() {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [compData,setCompData] =useState<any>([])
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter()

  const legalIcon = new Icon ({
    iconUrl : 'https://icon-library.com/images/rent-car-icon/rent-car-icon-3.jpg',
    iconSize : [35,35],   


  })
  const userMarker = new Icon ({
    iconUrl : 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize : [35,35], 

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
    <div className='mapp'>
    <FormControl sx={{ m: 1, width: 250, position: "relative", top: "-335px", right: "-70px" }}>
      <button id='Location' className='mt-2 border rounded w-[230px] h-[55px]' onClick={() => setModalOpen(true)}>Search For The Nearest Company</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
        <MapContainer center={{ lat: 36.859108, lng: 10.190414 }} zoom={15} style={{ height: '500px', width: '700px' }} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
            {compData.map((company, i) => (
              <div key={i}>
                <Marker position={{ lat: company.laltitude, lng: company.longtitude }} icon={legalIcon}>

                    <div>
                    <Popup>
                      <button onClick={() => router.push(`/client/searchedCar/${company.idcompany }`, )}>View Vehicles</button>
                    </Popup>
                    
                      <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                        {company.companyName}
                      </Tooltip>
                      </div>   
                </Marker>
              </div>
            ))}
          <LocationMarker />
        </MapContainer>
      </Modal>
    </FormControl>
    
  </div>
  
  );
}
