import React from 'react';
import "./companyInfo.css"
interface CompanyInfo {
  name: string;
  description: string;
  industry: string;
  founded: number;
  headquarters: string;
  profilePicture: string; 

}

interface CompanyBoxProps {
  company: CompanyInfo;
}

const CompanyBox: React.FC<CompanyBoxProps> = ({ company }) => {
  return (
    <div className="company-box">
      <img className="profile-pic" src={company.profilePicture} alt="Profile" />
      <h2 className='company-name'>{company.name}</h2>
      <p className='company-status'><strong >Account Status:</strong> {company.description}</p>
      <p className='company-locationn' ><strong >Location:</strong> {company.industry}</p>
    </div>
  );
};

export default CompanyBox;
