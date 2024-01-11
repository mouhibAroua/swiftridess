"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useState } from "react";
export default function Home() {
  const { push } = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const logCompany  = await axios.post("http://localhost:3000/api/login", { emailCompany: email, passwordCompany: password });

      alert(JSON.stringify(logCompany));
      localStorage.setItem('idcompany', logCompany.data.idcompany);
      console.log("data ", logCompany)
      push("/company/Payment")
      // redirect the user to home 
      // push("/Home");

    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };
  const getCompanyIdFromLocalStorage = () => {
    const storedCompanyId = localStorage.getItem('idcompany');
    if (storedCompanyId) {
      setUserId(storedCompanyId);
    }
  };

  return (
     <div className='bg-white grid grid-cols-2 gap-96 w-full' >
     <div>  <img
                className="absolute w-[805px] h-[706px] top-[270px] left-0"
                alt="Dl beatsnoop"
                src="https://img.freepik.com/premium-psd/modern-car-transparent-background-3d-rendering-illustration_494250-37022.jpg"
              /></div>

    <div className="grid h-screen w-96 mt-20">
      <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl  text-center font-bold my-4 py-20"><h3 className="text-xs mt-3"> Welcome Back</h3></h1>
       

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
   
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         
          <button className="bg-cyan-50 text-black font-bold cursor-pointer px-6 py-2 hover:bg-red-500" onClick={()=>getCompanyIdFromLocalStorage()}>
            Log In
          </button>

          <Link className="text-sm mt-3 text-center" href="/SignupCompany">
            You Don't Have an Account? <span className="underline font-bold font-red-500 hover:">Register Now</span>
          </Link>
        </form>
        
      </div>
      
    </div>
    </div>
  );
}
