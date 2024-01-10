"use client"
import axios from "axios";
import { useState } from "react";

interface Client {
    id:Number;
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
    const [password, setPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [show, setShow] = useState<Boolean>(false)

    const addPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'pa4ezjqw');
    
          axios
            .post('https://res.cloudinary.com/dfsyqvvim/image/upload', formData)
            .then((res) => {
              console.log('secure', res.data.secure_url);
              setImgUrl(res.data.secure_url);
              console.log('url', imgUrl);
            })
            .catch((err) => {
              console.log(formData);
              console.log(err);
            });
        }
      };

      const modifyProfile = (user:Object) => {
              axios
                .put("http://localhost:3000/api/users/${id}", user)
                .then((res) => {
          console.log(res.data,"res")
                  alert("You successfully updated your account");
                  })
                .catch((err) =>
          
          console.log(err)
                  )};
    

return(
    

<div className="max-h-screen justify-center items-center bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src=""
                            alt=""/>

                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button type="button"
                                className="text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                onClick={()=>{setShow(!show)}}>
                                Change picture
                            </button>
                            {show &&
                            <div>
                            <input type="file" onChange={(e) => addPicture(e)} />
                          </div>}
                            <button type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Delete picture
                            </button>
                        </div>
                    </div>

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

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
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Password</label>
                            <input type="password" id="password"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input type="password" id="New-password"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="New Password" onChange={(e)=>setNewPassword(e.target.value)} />
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="text-black bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                onClick={()=>{modifyProfile({fullName:fullName,phoneNumber:phoneNumber,email:email,password:password,newPassword:newPassword})}}
                                >Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
)
}

export default UpdateProfile