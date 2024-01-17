"use client "
import React from "react"
import Sidebar from "../sidebar/page"
import {Typography } from '@mui/material';
import Box from '@mui/material/Box';  // Corrected import
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const profile:React.FC  = ()=>{
    return (
      <div className="flex h-screen">
      <Sidebar/>
   
         {/* Main Content */}
         <div className="flex-1 bg-gray-100 p-4 ml-[350px]">
         {/* Your main content goes here */}
         <div>
         <Typography variant="h1" fontWeight="bold" style={{ color: '#000080' }}>
           Profile
         </Typography>
         <div className="flex">
    
  <Box className="p-80 rounded-md shadow-md bg-gray-200 fixed top-30 left-[-4]">
    {/* Content for the first box */}
    <form >
            <Box
            className="items-start "
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              // sx={{
              //   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              // }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.firstName}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                // helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.lastName}
                name="lastName"
                // error={!!touched.lastName && !!errors.lastName}
                // helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.email}
                name="email"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.contact}
                name="contact"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.address1}
                name="address1"
                // error={!!touched.address1 && !!errors.address1}
                // helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.address2}
                name="address2"
                // error={!!touched.address2 && !!errors.address2}
                // helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
  </Box>

  <Box className="p-40 rounded-md shadow-md bg-gray-200 fixed top-30 right-4">
    <div className="flex items-center mt-[-260px] ml-10">
      <button className="w-15 h-15 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600">
        <img
          src="https://cdn.discordapp.com/attachments/1154695405645340722/1196115147987628073/377126404_1282887952416251_3954805956161640879_n.jpg?ex=65b6740a&is=65a3ff0a&hm=6f8612f82f75beaf8ff027a67350e605e3e9e7209e40794b2b590df62712f9a7&"
          className="w-full h-full rounded-full"
          alt="Profile"
        />
      </button>
    </div>
    <Typography variant="h4" fontWeight="bold" gutterBottom className="ml-20">
      Nourhen Abidi
    </Typography>
    <Typography variant="h5" gutterBottom className="center ml-36" style={{ color: 'grey' }}>
      Mostachara
    </Typography>
    <Box display="flex" justifyContent="space-between" mt="2px">
      <Typography variant="h5" fontStyle="italic" className="ml-auto text-green-500">
        21%
      </Typography>
    </Box>
    <div>
      <Typography variant="h5" fontStyle="italic" className="ml-auto text-green-500 ml-10">
        About Me:
      </Typography>
      <p> this space is only for admins </p>
    </div>
  </Box>
</div>


         {/* <div className="admin-profile-box">
  <div className="profile-picture-container">
    <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
  </div>
  <div className="profile-info">
    <h3>Admin Name</h3>
    <p>Followers: 100</p>
    <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div> */}

      </div> 
      </div>
      </div>
    )
}
export default profile;