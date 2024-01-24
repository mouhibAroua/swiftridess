"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./companyInfo.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { Modal } from "react-responsive-modal";
import Home from "../../../chat/page"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
interface CompanyInfo {
  idcompany: number;
  companyName: string;
  ownerName: string;
  phoneNumber: string;
  location: string;
  verification: boolean;
  longtitude: string;
  laltitude: string;
  emailCompany: string;
  passwordCompany: string;
  
}

interface CarCompanyInfoProps {
}

const CarCompanyInfo: React.FC<CarCompanyInfoProps> = ({ }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

const userId=localStorage.getItem("id")
  var currentUrl = window.location.href;
    var endPoint=currentUrl.split("/")
    var i=endPoint[endPoint.length-1]

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/company/car/${i}`);
        setCompanyInfo(response.data);
      } catch (error) {
        setError('Error fetching company info');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!companyInfo) {
    return <p>No company information available</p>;
  }

  return (
    <div className='topSection'>
      <p>{companyInfo.companyName}</p>
      <p><CheckCircleOutlineIcon/> {companyInfo.verification ? 'Verified' : 'Not Verified'}</p>
      <p><CalendarMonthIcon/> </p>
    <div className='bottomSection'>
    <p>Contact:</p>
    {!userId?" ":<button onClick={() => setModalOpen(true)}>
 <ChatIcon/>Contact Us
 </button>
}
<Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
  <Home company={companyInfo.idcompany}/>
</Modal>
      <p><LocalPhoneIcon/> {companyInfo.phoneNumber}</p>
      <p><EmailIcon/> {companyInfo.emailCompany}</p>
    </div>
  </div>
  );
};

export default CarCompanyInfo;
