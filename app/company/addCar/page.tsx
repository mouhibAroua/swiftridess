"use client"
import axios from "axios";
import { useState, useRef } from "react";

interface Car {
    price: number;
    brand:string;
    model: string;
    type: string;
    transmission: string;
    fuelType: string;
    registration: string;
    image: string;
    mileage: string;
    occasion:string;
    passengers:string

}

const addCar=()=>{
    const [price, setPrice] = useState<number>(0)
    const [brand, setBrand] =useState<string>("")
    const [model, setModel] =useState<string>("")
    const [type, setType] =useState<string>("")
    const [transmission, setTransmission] =useState<string>("")
    const [fuelType, setFuelType] =useState<string>("")
    const [registration, setRegistration] =useState<string>("")
    const [mileage, setMileage] =useState<string>("")
    const [occasion, setOccassion] =useState<string>("")
    const [passengers, setPassengers] =useState<string>("")
    const [imgUrl, setImgUrl] = useState<string>("");
    const [previewImage, setPreviewImage] = useState<string>("");
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

      const obj: Car = {
        price: price,
        image: imgUrl,
        brand:brand,
        model: model,
        type: type,
        transmission: transmission,
        fuelType: fuelType,
        registration: registration,
        mileage: mileage,
        occasion:occasion,
        passengers: passengers
      };
    
      const addNewCar = () => {
        axios
          .post('http://localhost:3000/api/car/add', obj)
          .then(() => {
            alert('Car added');
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return(
       <div className="grid grid-cols-2 gap-1">
        <div>
        <h1 className="text-center font-bold-5xl text-7xl mt-[100px]">Add New Car</h1>
        <div className=" space-y-5 sm:flex-row sm:space-y-0 gap-6">
        <img 
        className="block rounded-md border object-cover w-60 h-60 ml-[200px] mt-10 p-1  "
                            src={previewImage}
                            alt=""/>
        <button className="ml-[250px] mt-9 text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
        onClick={handleButtonClick}>
            Add Picture</button>
         <input 
            ref={fileInputRef}
            type="file" 
            className="hidden"
            onChange={(e) =>{ addPicture(e) }} 
          /> 
          <img className="w-90 h-90" src="https://i.pinimg.com/originals/b3/18/8c/b3188c1d762e8b7d1ea9e5b41b12685e.jpg"/>    
        </div>
        </div>
        <div className="mt-[150px]">
            <div className="grid grid-cols-3  mt-[100px] mr-10">
              <div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Price/Day</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setPrice(e.target.valueAsNumber)}
      type="number"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Brand</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setBrand(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 
  </div>
  
  <label  className="block text-gray-800 font-semibold text-sm"
    >Model</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setModel(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  </div>
  <div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Type</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setType(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  
  </div>
 
  <label  className="block text-gray-800 font-semibold text-sm"
    >Registration</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setRegistration(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Fuel</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setFuelType(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
   
    </div>
 
  <label  className="block text-gray-800 font-semibold text-sm"
    >Mileage</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setMileage(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  </div>
  <div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Transmission</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setTransmission(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 
  </div>
  
  <label  className="block text-gray-800 font-semibold text-sm"
    >Occassion</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setOccassion(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  <label  className="block text-gray-800 font-semibold text-sm"
    >Passenger</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setPassengers(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  </div>
  </div>
  <button className="text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 mt-10 ml-[240px] "
  onClick={()=>{addNewCar()}}>
    add you new car now</button>
  </div>

  </div>

        
    )
}

export default addCar