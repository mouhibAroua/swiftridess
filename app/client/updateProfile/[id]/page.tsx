"use client"
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import bcrypt from "bcryptjs"
import Navigation from "@/app/Home/navbar/page";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Client {
    id:string|null;
    fullName: string;
    image_user: string;
    phoneNumber: string;
    email: string;
    password: string
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
const UpdateProfile=()=>{
    const [imgUrl, setImgUrl] = useState<string>("");
    const [fullName, setFullName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [previewImage, setPreviewImage] = useState<string>("");
    const [userId, setUserId] = useState<string|null>("")
    const {id} = useParams()
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
      getId();
    },[])
    const getId=()=>{
      const userId = typeof window !== 'undefined' ? window.localStorage.getItem("id") : null
          setUserId(userId)
    }
    const addPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'pa4ezjqw');
    
          axios
            .post("http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload", formData)
            .then((res) => {
              console.log('secure', res.data.secure_url);
              setImgUrl(res.data.secure_url);
              setPreviewImage(res.data.secure_url);
              console.log('url', imgUrl);
            })
            .catch((err) => {
              console.log(formData);
              console.log(err);
            });
        }
      };

      const handleButtonClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

      const password=async (val:any)=>{
        let hashedNewPassword = await bcrypt.hash(newPassword, 10);
        setNewPassword(hashedNewPassword)
        
    }

     
      const modifyProfile = async (user: Client) => {
        try {
    
          const updatedUser = {
            ...user,
            newPassword,
            image_user: imgUrl,
          };
    
          const response = await axios.put(`http://localhost:3000/api/users/${userId}`, updatedUser);
          console.log(response.data, 'res');
          notify()
        } catch (error) {
          console.error(error);
        }
      };
    
      
               

return(    
  <>
  {(id!==userId)&&
  "not found"}
  {(id===userId)&&
    <div>
      <Navigation/>
      <ToastContainer/>
  <div className="flex justify-between">
                <div className="flex">
<div className=" bg-slate ml-80 mt-40 w-[1000px] h-[600px] flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] ">
        <div className="p-2 md:p-4 ">
            <div className="px-6 pb-8 mt-8  sm:rounded-lg">
                <div className="flex flex-col md:flex-row md:flex-1 ">
                  <div className="p-4 py-6  md:flex md:flex-col ">
                    <div className="flex flex-col md:flex-row md:flex-1 ml-[-300px]">
                        <img className="object-cover bg-gray-400 w-[400px] h-[545px] mt-[-72px] "
                            src={previewImage}
                            alt=""/>
                            </div>
                        <div className="flex flex-row space-y-5 ml-[-300px]">
                            <button type="button" 
                                className="text-white py-3.5 w-[400px] px-7 text-base font-medium text-indigo-100 focus:outline-none bg-slate border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                onClick={handleButtonClick}>
                                Change picture
                            </button>
                            <input 
                             ref={fileInputRef}
                             type="file" 
                             className="hidden"
                             onChange={(e) =>{ addPicture(e) }} 
                             />                        
                        </div>
                    
                    </div>
                    <div>
                    <div className="items-center ml-28 text-[#202142]">

                        <div className="flex flex-col mt-16 items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                   Full Name</label>
                                <input type="text" id="Full-Name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}/>
                            </div>

                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                    Phone Number</label>
                                <input type="text" id="phone"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} />
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" onChange={(e)=>setEmail(e.target.value)} />
                        </div>


                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input type="password" id="New-password"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="New Password" onChange={(e)=>password(e.target.value)} />
                        </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit"
                                className=" bg-gray-800 text-white border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                                onClick={()=>{modifyProfile({id:userId,fullName:fullName,phoneNumber:phoneNumber,email:email,password:newPassword,image_user:imgUrl})
                                window.location.reload();
                                }}>
                                Save</button>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
</div>
}
</>
)
}

export default UpdateProfile