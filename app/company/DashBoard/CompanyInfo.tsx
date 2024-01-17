"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VerifiedIcon from '@mui/icons-material/Verified';
import ApartmentIcon from '@mui/icons-material/Apartment';
interface Company {
  id: number;
  companyName: string;
  verification : number;
}

const CompanyInfo: React.FC = () => {
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/company/getOne/5');
        setCompanyData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {companyData && (
        <div>
        <h2><ApartmentIcon/>{companyData.companyName}</h2>
        <h2><VerifiedIcon/>verified</h2>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
