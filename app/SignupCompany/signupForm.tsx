"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import './signup.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';


export default function RegisterForm() {
  const [companyName, setCompanyName] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [longtitude, setLongitude] = useState<string>("");
  const [laltitude, setLatitude] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!companyName || !ownerName || !phoneNumber || !longtitude || !laltitude || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resCompanyExists = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { company } = await resCompanyExists.json();

      if (company) {
        setError("Company already exists.");
        return;
      }
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName:  companyName,
          ownerName : ownerName,
          phoneNumber:phoneNumber,
          longtitude:longtitude,
          laltitude:laltitude,
          emailCompany: email,
          passwordCompany : password
        }),
      });

      if (res.ok) {
        router.push("/LoginCompany");
      } else {
        console.log("Company registration failed.",error);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };



  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude.toString());
        setLongitude(longitude.toString());

        
        console.log('Lat:', latitude);
        console.log('Lng:', longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  };

  return (
    <div className='flex justify-center items-center h-screen' style={{ backgroundColor: '#9ca3af' }}>
          <div className="video-background ">
              <video src={process.env.PUBLIC_URL+"/assets/video3.mp4"} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>
          </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card mx-auto">
            <a className="login">Sign Up</a>

            <div className="inputBox">
              <input
                required={true}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
              />
              <span className="user">Company Name</span>
            </div>

            <div className="inputBox">
              <input
                required={true}
                onChange={(e) => setOwnerName(e.target.value)}
                type="text"
              />
              <span className="user">Owner Name</span>
            </div>

            <div className="inputBox">
              <input
                required={true}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
              />
              <span className="user">Phone Number</span>
            </div>

            <div className="inputBox">
              <input
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
              <span className="user">Email</span>
            </div>

            <div className="inputBox">
              <input
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <span className="user">Password</span>
            </div>

            <div className="inputBox  ">
             
              
            <button type="button" onClick={handleLocation}
              className={`locationButton ${laltitude && longtitude ? 'locationObtained' : 'locationError'} text-white`}>
                Get Location
                {laltitude && longtitude ? (
                  <img
                    className="locationIcon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png"/>
                ) : (
                  <img
                    className="locationIcon"
                    src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/151_check_no_delete_error_remove-512.png" />
                )}
              </button>



            </div>

            <button className="enter">Register</button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <div className='flex text-sm text-white'>
              <h1 className=' mb-4'>Already have an account?</h1>
              <Link href="/LoginCompany"><span className='underline cursor-pointer'>Log in</span></Link>
            </div>
          </div>
        </form>


      </div>
    </div>
  );
}