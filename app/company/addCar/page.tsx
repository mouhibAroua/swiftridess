"use client"
import axios from "axios";
import { useState, useRef } from "react";
import SideNav from "../../company/DashBoard/Sidenav"

interface Car {
    price: number;
    brand:string;
    model: string;
    type: string;
    transmission: string;
    fuelType: string;
    registration: string;
    image: string[];
    mileage: string;
    occasion:string;
    passengers:string;
    

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
    const [image, setImage] = useState<string[]>([]);
    const [previewImage, setPreviewImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const addPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file && image.length < 5) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'pa4ezjqw');
    
          axios
            .post("http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload", formData)
            .then((res) => {
              setImage(prevImages => [...prevImages, res.data.secure_url]);
              if (previewImage.length === 0) {
                setPreviewImage(res.data.secure_url);
              }
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
        image: image,
        brand:brand,
        model: model,
        type: type,
        transmission: transmission,
        fuelType: fuelType,
        registration: registration,
        mileage: mileage,
        occasion:occasion,
        passengers: passengers,
      };
    
      const addNewCar = () => {
        const idcompany = localStorage.getItem("idcompany")
        const newCar : Car&{company_idcompany:string|null} = {
          ...obj,
          company_idcompany : idcompany
        }
        axios
          .post(`http://localhost:3000/api/car/add`, newCar)
          .then(() => {
            alert('Car added');
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return(
      
       <div className="grid grid-cols-2 gap-1">
        
        <SideNav/>
        <div>
        <h1 className="text-center font-bold-5xl text-5xl mt-[100px] ml-80 ">Add New Car</h1>
        <div className=" space-y-5 sm:flex-row sm:space-y-0 gap-6">
        <button className="ml-[500px] mt-[50px] text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
        onClick={handleButtonClick}>
            Add Pictures</button>
         <input 
            ref={fileInputRef}
            type="file" 
            className="hidden"
            onChange={(e) =>{ addPicture(e) }} 
          /> 
        <div className="flex flex-wrap space-x-4 space-y-4">
        
        {image.slice(0, 5).map((image, index) => (
        <img 
        className=" rounded-md border object-cover w-[200px] h-[200px] p-1 ml-[250px]  "
                            key={index}
                            src={image}
                            alt={`previewImage ${index}`}/>
                            ))}
                            </div>
        
          <img className="w-[600px] h-[500px] ml-[240px]" src="https://i.pinimg.com/originals/b3/18/8c/b3188c1d762e8b7d1ea9e5b41b12685e.jpg"/>    
         
        </div>
        </div>
        <div className="mt-[150px]">
            <div className="grid gap-y-4 grid-cols-2 ">
             
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Price/Day :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setPrice(e.target.valueAsNumber)}
      type="number"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Brand :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setBrand(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 
  </div>
  
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Model :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setModel(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 
  </div>
  
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Type :</label>
  <div >
  <select className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="type" value={type}
          onChange={e => setType(e.target.value)}>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Convertible">Convertible</option>
          <option value="Sport">Sport</option>
          <option value="Limosine">Limosine</option>
       </select>
  </div>
 
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Registration :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setRegistration(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Fuel :</label>
  <div className="mt-2">
  <select className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="fuel" value={fuelType}
          onChange={e => setFuelType(e.target.value)}>
          <option value="Diesel">Diesel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electrique">Electrique</option>
       </select>
   
    </div>
 
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Mileage :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setMileage(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  
  </div>
  
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Transmission :</label>
  <div className="mt-2">
    <input
    onChange={(e)=>setTransmission(e.target.value)}
      type="text"
      name="inputname"
      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 
  </div>
  
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Occassion :</label>
  <div className="mt-2">
  <select className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="occasion" value={occasion}
          onChange={e => setOccassion(e.target.value)}>
          <option value="Daily use">Daily Use</option>
          <option value="Marriage">Marriage</option>
          <option value="Transporter">Transporter</option>
       </select>
  </div>
  <label  className="ml-[200px] block text-gray-800 font-bold text-lg"
    >Passenger :</label>
  <div className="mt-2">
  <select className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="passenger" value={passengers}
          onChange={e => setPassengers(e.target.value)}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
  
  </div>
  </div>
  <button className="text-white py-3.5 px-7 text-base font-large text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 mt-10 ml-[240px] w-[300px]"
  onClick={()=>{addNewCar()}}>
    add car</button>
  </div>

  </div>

        
    )
}

export default addCar