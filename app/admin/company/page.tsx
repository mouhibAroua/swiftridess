"use client"
import React,{useState,useEffect} from "react";
import { Typography } from "@mui/material";
import Sidebar from "../sidebar/page"
import axios from 'axios';


interface Company {
  idcompany: number;
  companyName: string;
  ownerName: string;
  phoneNumber: string;
  verification : number;
  longtitude:string;
  latitude:string;
  emailCompany:string;
  PaymentVerification:boolean;
  createdAt:Number;

} 



const company:React.FC =()=>{
  const [companyData, setCompanyData] = useState<Company[]| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/company/getAll');
console.log(response.data);

        setCompanyData(response.data);
      } catch (error) {
        console.log(error);
        
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteCompany = async (id:number) => {
    
    try {
      await fetch(`http://localhost:3000/api/company/${id}`, {
        method: 'DELETE',
      });
      console.log("user deleted");
    } catch (error) {
      console.error("delete category:", error);
    }
  };




    return (
        <div className="flex h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
           {/* Your main content goes here */}
           <div>

           <Typography variant="h2" fontWeight="bold" style={{ color: '#000080' }}>
           List of companies
           </Typography>
           
           {/* <Typography variant="h5" fontWeight="bold" style={{ color: '#000080' }}>
             :
           </Typography> */}
           
           <div className="companies-container">
           
          <div className="com-box">


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            
                </th>
                <th scope="col" className="px-4 py-2">
                    id
                </th>
                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Company Name 
                </th>
                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Owner name 
                </th>
                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Email 
                </th>

                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Phone Number 
                </th>

                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Longtitude 
                </th>
                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Latitude
                </th>
                <th scope="col" className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Verification
                </th>

            </tr>
        </thead>
        <tbody>
        {companyData && companyData.map((e,i) => (
            <tr key={i}>
              <td className="flex items-center px-4 py-2"> {e.PaymentVerification}
                <input type="checkbox"/>
                </td>
  <span className="slider round"></span>
                <td scope="col" className="px-4 py-2">
                   {e.idcompany}
                </td>
                <td scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {e.companyName}
                </td>
                <td scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {e.ownerName}
                </td>
                <td className="px-6 py-4 text-black ">
                {e.emailCompany}
                </td>

                <td className="px-4 py-2">
                {e.phoneNumber}
                </td>
                <td className="px-4 py-2 text-black ">
                {e.longtitude}
                </td>
                <td className="px-4 py-2 text-black ">
                {e.longtitude}
                </td>
                <td className="flex items-center px-4 py-2"> {e.verification}
                <button  onClick={() => { deleteCompany(e.idcompany) }}>   
                <a href="#" className="font-medium text-red-600 dark:text-black hover:underline ms-3">Remove</a>
                </button> 
                </td>

            </tr>
              ))}
            </tbody>
        
                </table>
                </div>
                </div>
      
      </div>
      </div>
           </div>

           </div>
    )
}
export default company;


