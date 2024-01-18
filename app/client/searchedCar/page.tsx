"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

interface Cars{
    id:string
    price: number;
    brand:string;
    type: string;
    fuelType: string;
    image: string[];
    passengers:string;
    idcompany:string
    
}

const AllCars:React.FC<Cars> = ({ idcompany }) => {

   const [companyCars, setCompanyCars] = useState<Cars[]>([])

   useEffect(()=>{
    axios.get(`http://localhost:3000/api/company/allcars/${idcompany}`)
    .then((res)=>{
        setCompanyCars(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
   },[idcompany])
    return(
        <div>
        <h1 className="text-center font-bold text-5xl mt-20"> Choose your favorite car</h1>
        <div className="mt-10 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {companyCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md h-[400px] w-[300px]">
                <img className="flex" src={car.image[0]} alt={`Car ${car.brand}`} />
                <div className="px-4 py-2 bg-gray-200 rounded-t-lg">
                  <h1 className="text-lg font-semibold">{car.brand}</h1>
                  <div className="space-x-4">
                    <p className="inline-block">
                      <PeopleIcon /> {car.passengers}
                    </p>
                    <p className="text-gray-600 inline-block">
                      <LocalGasStationIcon /> {car.fuelType}
                    </p>
                    <p className="inline-block">
                      <DirectionsCarIcon /> {car.type}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-2xl font-semibold mb-2">{car.price}DT/Day</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

}
export default AllCars