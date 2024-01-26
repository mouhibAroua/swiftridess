"use client"
import { useState, useRef} from "react"
import axios from "axios"
import SideNav from "../../DashBoard/Sidenav"
import { useParams } from "next/navigation"
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
}


const UpdateCar = ({ carData }: { carData: Car | null }) => {
    const [price, setPrice] = useState<number>(carData?.price || 0)
    const [brand, setBrand] =useState<string>(carData?.brand || '')
    const [model, setModel] =useState<string>(carData?.model || '')
    const [type, setType] =useState<string>(carData?.type || '')
    const [transmission, setTransmission] =useState<string>(carData?.transmission || '')
    const [fuelType, setFuelType] =useState<string>(carData?.fuelType || '')
    const [registration, setRegistration] =useState<string>(carData?.registration || '')
    const [mileage, setMileage] =useState<string>(carData?.mileage || '')
    const [occasion, setOccassion] =useState<string>(carData?.occasion || '')
    const [passengers, setPassengers] =useState<string>(carData?.passengers || '')
    const [image, setImage] = useState<string[]>(carData?.image||[]);
    const [previewImage, setPreviewImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {id} =useParams()
    const idcars = id

    
    
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

      const notify = () => {
        toast.success('Car  updated successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      };
    
      const update = () => {
        const obj: Car = {
          price,
          image,
          brand,
          model,
          type,
          transmission,
          fuelType,
          registration,
          mileage,
          occasion,
          passengers
        };
        axios
          .put(`http://localhost:3000/api/car/update/${idcars}`, obj)
          .then(() => {
            notify()
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return(
       <>
    {(id!==idcars)&&
    "not found"}
    {(id===idcars)&& 
       <div>
        
        <SideNav/>
        <ToastContainer/>
        <div className="mt-[100px] ml-[300px] bg-gradient-to-r from-gray-800 to-white-300 w-[1000px] rounded-tr-[100px] rounded-bl-[100px]">
       <h1 className="text-center font-bold-5xl text-[70px]  ml-50 text-white font-serif">Update Vehicle</h1>
        <div className="grid grid-cols-2 ">
        <div className="grid ml-10 mt-[50px] space-y-4 ">
            
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
  onClick={()=>{update()}}>
    Update</button>
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
        </div>
}
  </>
    )
}

export default UpdateCar