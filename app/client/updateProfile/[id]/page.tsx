"use client"
import axios from "axios";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import bcrypt from "bcryptjs"
import Navigation from "@/app/Home/navbar/page";

interface Client {
    id:string|null;
    fullName: string;
    image_user: string;
    phoneNumber: string;
    email: string;
    password: string
  }

const UpdateProfile=()=>{
  
    const [imgUrl, setImgUrl] = useState<string>("");
    const [fullName, setFullName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [previewImage, setPreviewImage] = useState<string>("");
    const userId = localStorage.getItem('id')
    const {id} = useParams()
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    
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
          alert('You successfully updated your account');
        } catch (error) {
          console.error(error);
        }
      };
    
      
               

return(    
  <>
  {(id!==userId)&&
  <h1>not found</h1>}
  {(id===userId)&&
    <div>
      <Navigation/>
  <div className="flex justify-between">
                <div className="flex">
<div className="justify-center items-center bg-gray-400 w-[700px] h-[600px] flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] ml-[100px] mt-10 rounded-3xl">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <div className="grid max-w-2xl mx-auto">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500 hover:te"
                            src={previewImage}
                            alt=""/>
                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button type="button" 
                                className="text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
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

                    <div className="items-center text-[#202142]">

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
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

                        <div className="flex justify-end">
                            <button type="submit"
                                className=" bg-gray-800 text-white border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                                onClick={()=>{modifyProfile({id:userId,fullName:fullName,phoneNumber:phoneNumber,email:email,password:newPassword,image_user:imgUrl})}}>
                                Save</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<div className="h-screen w-[600px] overflow-hidden">
<img
className="h-[700px] w-[500px] object-cover ml-[100px]"
src="https://www.pixelstalk.net/wp-content/uploads/2016/10/BMW-F30-335i-1080x1920.jpg"/>
</div>
</div>
</div>
}
</>
)
}

export default UpdateProfile