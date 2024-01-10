"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import Footer from "../Footer/page";

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
    <div className='bg-white grid grid-cols-2 gap-96 w-full' >
     <div>  <img
                className="absolute w-[805px] h-[706px] top-[270px] left-0"
                alt="Dl beatsnoop"
                src="https://img.freepik.com/premium-psd/modern-car-transparent-background-3d-rendering-illustration_494250-37022.jpg"
              /></div>

    <div className="grid h-screen w-96 mt-20">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl  text-center font-bold my-4 py-20"><h3 className="text-xs mt-3"> Register And Start Shopping !</h3></h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            placeholder="Company Name"
          />
            <input
            onChange={(e) => setOwnerName(e.target.value)}
            type="text"
            placeholder="Owner Name"
          />
           <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            placeholder="phone number"
          />

          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="position of company"
          />

          <input
            onChange={(e) => setLongtitude(e.target.value)}
            type="text"
            placeholder="longtitude of company"
          />
          <input
            onChange={(e) => setLaltitude(e.target.value)}
            type="text"
            placeholder="latitude of company"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
            
          <button className="bg-cyan-50 text-black font-bold cursor-pointer px-6 py-2 hover:bg-red-500">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center" href="/Login">
            Already have an account? <span className="underline font-bold font-red-500">Login</span>
          </Link>
        </form>
        
      </div>
      
    </div>
    </div>
  );
}
