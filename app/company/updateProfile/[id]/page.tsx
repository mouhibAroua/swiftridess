"use client"
import axios from "axios";
import { useState, useEffect} from "react";
import bcrypt from "bcryptjs"
import { useParams } from "next/navigation";
import Sidebar from "../../DashBoard/Sidenav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Company {
    idcompany:string|null;
    companyName: string;
    ownerName: string;
    phoneNumber: string;
    emailCompany: string;
    passwordCompany: string
  }

const UpdateProfile=()=>{
    
    const [companyName, setCompanyName] = useState<string>("")
    const [ownerName, setOwnerName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [emailCompany, setEmailCompany] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [idcompany, setIdcompany] = useState<string|null>("")
    const param = useParams()
    const id=param.id
    useEffect(()=>{
        getId();
      },[])
      const getId=()=>{
        const idcompany = typeof window !== 'undefined' ? window.localStorage.getItem("idcompany") : null
        console.log("iii",param);
            setIdcompany(idcompany)
      }

const password=async (val:any)=>{
    let hashedNewPassword = await bcrypt.hash(newPassword, 10);
    setNewPassword(hashedNewPassword)
    
}
const notify = () => toast.success('You successfully updated your account !', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

      const modifyProfile = async (company:Object) => {
        
          const updatedCompany = {
            ...company,
            newPassword
          };
    
        try {
      
            const response = await axios.put(`http://localhost:3000/api/company/profile/${idcompany}`, updatedCompany);       
            console.log(response.data, 'res');
            notify()
          } catch (error) {
            console.error(error);
          }
              };
              
    

return(
    <>
    {(id!==idcompany)&&
    "not found"}
    {(id===idcompany)&& 
    <div>
    <Sidebar/>
<div className="flex bg-gradient-to-br from-gray-400 to-gray-300 h-screen ">
    
<div className=" w-[800px] rounded-md h-[550px] mt-[100px] ml-[400px] bg-white  flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] bg-gray-300">

    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 ">
        <ToastContainer/>
    <h1 className="font-serif text-center font-bold text-[40px]">Update Profile</h1>
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-5 sm:max-w-xl sm:rounded-lg">
                <div className="grid max-w-2xl mx-auto mt-2">
                    <div className=" ml-8 mt-2 text-[#202142]">
                        <div className="flex flex-col items-center mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                   Company Name</label>
                                <input type="text" id="Company-Name"
                                    className="bg-indigo-50 border-2 border-blue-800 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-sky-600 block w-60 p-2.5 "
                                    placeholder="Company Name" onChange={(e)=>setCompanyName(e.target.value)}/>
                            </div>

                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                    Owner Name</label>
                                <input type="text" id="owner"
                                    className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-60 p-2.5 "
                                    placeholder="Owner Name" onChange={(e)=>setOwnerName(e.target.value)} />
                            </div>

                        </div>
                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                Phone Number</label>
                            <input type="text" id="phone"
                                className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} />
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" onChange={(e)=>setEmailCompany(e.target.value)} />
                        </div>

    
                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input type="password" id="New-password"
                                className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="New Password" onChange={(e)=>password(e.target.value)} />
                        </div>
                        
                        <div className="flex justify-end">
                        <button className=" bg-back text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                        onClick={(e)=>{e.preventDefault()
                            modifyProfile({companyName:companyName, ownerName:ownerName,phoneNumber:phoneNumber, emailCompany:emailCompany} )}}>
                    
                        Save
                        </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</div>
</div>
}
</>
)
}

export default UpdateProfile