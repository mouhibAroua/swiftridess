"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./companyInfo.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

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
      <p><LocationOnIcon/> {companyInfo.location}</p>
    <div className='bottomSection'>
    <p>Contact:</p>
      <p><LocalPhoneIcon/> {companyInfo.phoneNumber}</p>
      <p><EmailIcon/> {companyInfo.emailCompany}</p>
    </div>
  </div>
  );
};

export default CarCompanyInfo;
