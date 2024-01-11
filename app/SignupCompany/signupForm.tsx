"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import Footer from "../Footer/page";
import './signup.css'
export default function RegisterForm() {

  const [companyName, setCompanyName] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [longtitude, setLongtitude] = useState<string>("");
  const [laltitude, setLaltitude] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e :  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!companyName ||!ownerName ||!phoneNumber ||!location ||!longtitude ||!laltitude || !email || !password) {
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
        setError("company already exists.");
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
            location:location,
            longtitude:longtitude,
            laltitude:laltitude,
            emailCompany: email,
            passwordCompany : password
        
        }),
      });

      if (res.ok) {

        router.push("/LoginCompany");

      } else {
        console.log("company registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
console.log(phoneNumber)




  return (
    <div  className='flex justify-center items-center h-screen' style={{ backgroundColor: '#9ca3af' }}>
    <div className='max-w-[1700px] ml-20'>
     <img src="https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023LRS070007_01_1280_1AA.png" alt="" />
    </div>
    <div className="container ">
        <form onSubmit={handleSubmit} >
        <div className="card mx-auto">
          <a className="login">sign up</a>
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
           <input   required={true} 
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
          />
          <span className="user">phone number</span>
          </div>
          <div className="inputBox">
          <input   required={true} 
            onChange={(e) => setLocation(e.target.value)}
            type="text"
          />
         <span className="user">position of company</span>
          </div>
          <div className="inputBox">
          <input   required={true} 
            onChange={(e) => setLongtitude(e.target.value)}
            type="text"
          />
          <span className="user">longtitude of company</span>
          </div>
          <div className="inputBox">
          <input   required={true} 
            onChange={(e) => setLaltitude(e.target.value)}
            type="text"
          />
              <span className="user">longtitude of company</span>
          </div>
          <div className="inputBox">
          <input   required={true} 
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
            <span className="user">email</span>
          </div>
          <div className="inputBox">
          <input  required={true} 
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
             <span className="user">Password</span>
          </div>
          <button className="enter">register</button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

<div className='flex text-sm '>
          <h1  className=' mb-4'>Already have account  ?</h1><Link className=' ' href="/LoginCompany"><span className='underline  cursor-pointer'>  Log in</span></Link>
          </div>
          </div>
        </form>
      </div>
      
        </div>
  );
}
