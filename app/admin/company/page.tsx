"use client"
import React,{useState,useEffect} from "react";
import { Typography } from "@mui/material";
import Sidebar from "../sidebar/page"
import axios from 'axios';



interface Company {
  id: number;
  companyName: string;
  ownerName: string;
  phoneNumber: string;
  location: string;
  verification : number;
  longtitude:string;
  latitude:string;
  emailCompany:string;
  passwordCompany:string;
  PaymentVerification:number
} 


const company:React.FC =()=>{
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/company/getAll');
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
        <div className="flex h-screen">
        <Sidebar/>
     
           {/* Main Content */}
           <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
           {/* Your main content goes here */}
           <div>
           <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
  
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
    
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>

    </div>
  </div>
</nav>
           <Typography variant="h2" fontWeight="bold" style={{ color: '#000080' }}>
           List of companies
           </Typography>
           
           {/* <Typography variant="h5" fontWeight="bold" style={{ color: '#000080' }}>
             :
           </Typography> */}
           
           <div className="companies-container">
           {companyData && companyData.map((e,i) => (
          <div key={i} className="com-box">


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Company Name 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Owner name 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Email 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Password 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Phone Number 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Location 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Longtitude 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Latitude
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Verification 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" className="px-6 py-3">
                   {e.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {e.companyName}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {e.ownerName}
                </th>
                <td className="px-6 py-4">
                {e.emailCompany}
                </td>
                <td className="px-6 py-4">
                {e.passwordCompany}
                </td>
                <td className="px-6 py-4">
                {e.phoneNumber}
                </td>
                <td className="px-6 py-4">
                {e.location}
                </td>
                <td className="px-6 py-4">
                {e.longtitude}
                </td>
                <td className="px-6 py-4">
                {e.longtitude}
                </td>
                <td className="flex items-center px-6 py-4"> {e.verification}
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            </tbody>
        
                </table>
                </div>
                </div>
        ))}
      </div>
      </div>
           </div>

           </div>
    )
}
export default company;

            {/* <div className="com-details">
              <h3>
                {e.companyName} {e.ownerName}
              </h3>
              <h3 style={{ display: "flex", alignItems: "center" }}>
                 {e.phoneNumber}
                <span style={{ margin: "07px" }}></span>
                 {e.location}
                <span style={{ margin: "07px" }}></span>
                 {e.verification}
              </h3>
              <h3 style={{ display: "flex", alignItems: "center", position:"relative",top:"50px" }} >{e.longtitude} </h3>
              <h3 style={{ display: "flex", alignItems: "center", position:"relative",top:"50px" }} >{e.emailCompany} </h3>
              <h3 style={{ display: "flex", alignItems: "center", position:"relative",top:"50px" }} >{e.passwordCompany} </h3>
              <Stack spacing={2} direction="row">

      </Stack>
            </div> */}
