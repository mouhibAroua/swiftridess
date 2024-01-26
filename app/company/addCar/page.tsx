"use client"
import axios from "axios";
import { useState, useRef } from "react";
import SideNav from "../../company/DashBoard/Sidenav"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    serialCar: string;
    

}

const addCar=()=>{
    const [price, setPrice] = useState<number>(0)
    const [brand, setBrand] =useState<string>("")
    const [model, setModel] =useState<string>("")
    const [type, setType] =useState<string>("SUV")
    const [transmission, setTransmission] =useState<string>("Automatic")
    const [fuelType, setFuelType] =useState<string>("Diesel")
    const [registration, setRegistration] =useState<string>("")
    const [mileage, setMileage] =useState<string>("")
    const [occasion, setOccassion] =useState<string>("Dialy use")
    const [passengers, setPassengers] =useState<string>("2")
    const [image, setImage] = useState<string[]>([]);
    const [serialCar, setSerialCar] =useState<string>("")
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
        serialCar: serialCar
      };
      const notify = () => toast.success('Car added successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    
      const addNewCar = () => {
        const idcompany = localStorage.getItem("idcompany")
        const newCar : Car&{company_idcompany:string|null} = {
          ...obj,
          company_idcompany : idcompany
        }
        axios
          .post(`http://localhost:3000/api/car/add`, newCar)
          .then(() => {
            notify()
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return(
      
       <>
       
        <SideNav/>
        <div className="mt-[100px] ml-[300px] bg-gradient-to-t from-gray-400 to-gray-800 w-[1000px] rounded-3xl">
       <h1 className="text-center font-bold-5xl text-5xl  ml-50 text-white ">Add New Vehicle</h1>
        <div className="grid grid-cols-2 ">
        <div className="grid ml-10 mt-[50px] space-y-4 ">
        <ToastContainer/>
    <div className="grid grid-cols-2 ">      
  <label  className="block text-white text-lg"
    >Price/Day:</label>
 
    <input
    onChange={(e)=>setPrice(e.target.valueAsNumber)}
      type="number"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>   
  <div className="grid grid-cols-2">
  <label  className="block text-white text-lg"
    >Brand:</label>
  
    <input
    onChange={(e)=>setBrand(e.target.value)}
      type="text"
      name="inputname"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 "
    />
 </div>
  
  <div className="grid grid-cols-2" >
  <label  className="block  text-white  text-lg"
    >Model:</label>
  
    <input
    onChange={(e)=>setModel(e.target.value)}
      type="text"
      name="inputname"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 "
    />
 </div>
 
  <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Type:</label>
 
  <select className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 " 
  id="type" value={type}
          onChange={e => setType(e.target.value)}>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Convertible">Convertible</option>
          <option value="Sport">Sport</option>
          <option value="Limosine">Limosine</option>
       </select>
       </div>
 <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Year:</label>
  
    <input
    onChange={(e)=>setRegistration(e.target.value)}
      type="text"
      name="inputname"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 "
    />
  </div>
  <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Fuel:</label>
  
  <select className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 " 
  id="fuel" value={fuelType}
          onChange={e => setFuelType(e.target.value)}>
          <option value="Diesel">Diesel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electrique">Electrique</option>
       </select>
       </div>
    <div className="grid grid-cols-2">
 
  <label  className="block  text-white  text-lg"
    >Mileage:</label>
  
    <input
    onChange={(e)=>setMileage(e.target.value)}
      type="text"
      name="inputname"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
  </div>
  
  <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Transmission:</label>
 <select className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 " 
  id="transmission" value={transmission}
  onChange={(e)=>setTransmission(e.target.value)}>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
       </select>
 </div>
 <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Serial Number:</label>
    <input
    onChange={(e)=>setSerialCar(e.target.value)}
      type="text"
      name="inputname"
      className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />
 </div>
  <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Occassion:</label>
  
  <select className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="occasion" value={occasion}
          onChange={e => setOccassion(e.target.value)}>
          <option value="Daily use">daily</option>
          <option value="Marriage">wedding</option>
          <option value="Transporter">transporter</option>
       </select>
       </div>
       <div className="grid grid-cols-2">
  <label  className="block  text-white  text-lg"
    >Passenger:</label>
  
  <select className="block w-[300px] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" 
  id="passenger" value={passengers}
          onChange={e => setPassengers(e.target.value)}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </select>
  </div>
  
  
  <button className=" py-3.5 px-7 text-base font-large text-white focus:outline-none bg-gray-300 rounded-lg border border-indigo-200 focus:z-10 focus:ring-4 focus:ring-indigo-200  mt-[200px] ml-[150px] w-[300px]"
  onClick={()=>{addNewCar()}}>
    add Vehicle</button>
    
  </div>
  <div className=" space-y-5 sm:flex-col gap-6">
        <button className="ml-[200px] mt-[50px] text-white py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
        onClick={handleButtonClick}>
            Add Pictures</button>
         <input 
            ref={fileInputRef}
            type="file" 
            className="hidden"
            onChange={(e) =>{ addPicture(e) }} 
          /> 
        <div className="grid grid-cols-2 space-x-1 space-y-2 ml-[100px] mt-11">
        
        {image.slice(0, 5).map((image, index) => (
        <img 
        className=" rounded-md border object-cover w-[150px] h-[150px] p-1  "
                            key={index}
                            src={image}
                            alt={`previewImage ${index}`}/>
                            ))}
                            </div>
        </div>
        </div>
        </div>
  </>

        
    )
}

export default addCar