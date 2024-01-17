"use client"
import axios from "axios";
import { useState} from "react";

interface Company {
    idcompany:Number;
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
    const [passwordCompany, setPasswordCompany] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    

      const modifyProfile = (company:Object) => {
              axios
                .put("http://localhost:3000/api/company/profile/${idcompany}", company)
                .then((res) => {
          console.log(res.data,"res")
                  alert("You successfully updated your account");
                  })
                .catch((err) =>
          
          console.log(err)
                  )};
    

return(
    
<div className="flex ">
<img 
className="w-[500px] h-screen "
src="https://i.pinimg.com/originals/41/4a/86/414a8690808037a6a744c40bdaea7cd9.jpg"
alt=""/>
<div className=" w-[1000px]  bg-white  flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">

    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
    
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                               
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                   Company Name</label>
                                <input type="text" id="Company-Name"
                                    className="bg-indigo-50 border-2 border-blue-800 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-sky-600 block w-full p-2.5 "
                                    placeholder="Company Name" onChange={(e)=>setCompanyName(e.target.value)}/>
                            </div>

                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                    Owner Name</label>
                                <input type="text" id="owner"
                                    className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
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
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                            <input type="password" id="password"
                                className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Password" onChange={(e)=>setPasswordCompany(e.target.value)} />
                        </div>
                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input type="password" id="New-password"
                                className="bg-indigo-50 border-2 border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="New Password" onChange={(e)=>setNewPassword(e.target.value)} />
                        </div>
                        
                        <div className="flex justify-end">
                        <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                        onClick={()=>{modifyProfile({companyName:companyName, ownerName:ownerName,phoneNumber:phoneNumber, emailCompany:emailCompany, passwordCompany:passwordCompany, newPassword:newPassword} )}}>
                         <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
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
)
}

export default UpdateProfile