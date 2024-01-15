"use client"
import React ,{useState , useEffect} from "react";
import { Typography } from "@mui/material";
import Sidebar from "../sidebar/page"
import axios from "axios";

interface Client {
  id: number;
  fullName: string;
  image_user: string;
  phoneNumber: string;
  email:string;
  password:string;
  longitude:string;
  latitude:string;
  role:string;
} 

const client =()=>{
  const [data, setData] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        setData(response.data);
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
           <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
             list clients 
           </Typography>

           <div className="companies-container">
           {data && data.map((e,i) => (
          <div key={i} className="com-box">


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    fullName 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                image_user 
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
                role 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Longtitude 
                </th>
                <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    Latitude
                </th>
                {/* <th scope="col" className="px-6 py-3 hover:bg-gray-200 cursor-pointer">
                    verification 
                </th> */}
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" className="px-6 py-3">
                   {e.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {e.fullName}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {e.image_user}
                </th>
                <td className="px-6 py-4">
                {e.email}
                </td>
                <td className="px-6 py-4">
                {e.password}
                </td>
                <td className="px-6 py-4">
                {e.phoneNumber}
                </td>
                <td className="px-6 py-4">
                {e.role}
                </td>
                <td className="px-6 py-4">
                {e.longitude}
                </td>
                <td className="px-6 py-4">
                {e.latitude}
                </td>
                {/* <td className="flex items-center px-6 py-4"> {e.verification}
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td> */}
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
export default client;