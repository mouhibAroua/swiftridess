"use client"
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from "@mui/material";

const History: React.FC = () => {
    return(
<div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-2/3">
  <div className="container mx-auto">
    <div className="flex justify-between w-full px-4 py-2">
      <div className="text-lg font-bold">
        Order History
      </div>
      <Typography variant="h6" className="mt-2" style={{ color: 'grey' }}>
    Customers
  </Typography>
      <div className="px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </div>
    </div>
    <div className="mt-6 overflow-x-auto">
    <table className="w-full border border-collapse table-auto ">
      <thead className="">
        <tr className="text-base font-bold text-left bg-gray-50" style={{ color: '#000080' }}>
          <th className="px-4 py-3 border-b-2 ">Customer</th>
          <th className="px-4 py-3 border-b-2 border-green-500">Contact</th>
          <th className="px-4 py-3 border-b-2 border-green-500">Email</th>
          <th className="px-4 py-3 border-b-2 border-red-500">Name Vehicle </th>
          <th className="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Purchased On</th>
          <th className="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Company</th>

        </tr>
      </thead>
      <tbody className="text-sm font-normal text-gray-700">
        <tr className="py-10 border-b border-gray-200 hover:bg-gray-100">
          <td className="flex flex-row items-center px-4 py-4">
              <div className="flex w-10 h-10 mr-4">
                <a href="#" className="relative block">
                  <img alt="profil" src="https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="object-cover w-10 h-10 mx-auto rounded-md" />
                </a>
              </div>
              <div className="flex-1 pl-1">
                <div className="font-medium dark:text-white">Barbara Curtis</div>

              </div>
          </td>
          <td className="px-4 py-4">
            480-570-3413
          </td>
          <td className="px-4 py-4">
            nourhen@gmail.com
          </td>
          <td className="px-4 py-4">
            AUDI
          </td>
          <td className="px-4 py-4">
            Just Now
          </td>
          <td className="px-4 py-4">
                  <button className="mr-2 text-blue-500 hover:underline">confirm
                  <CheckIcon/> </button>
                  <button className="text-red-500 hover:underline">Delete 
                  <DeleteOutlineIcon /> </button>
                </td>
        </tr>



      </tbody>
    </table>
  </div>

  </div>
</div>
    )
}
export default History;