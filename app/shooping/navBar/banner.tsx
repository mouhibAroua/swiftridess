import React from "react";
import { useCartStore } from "../stores/CartStore";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";

const HeaderMain = () => {
  const cartStore = useCartStore();
  return (
    <div className="border-b border-gray-200 py-6 mr-[40px] " style={{marginLeft:'50px'}}>
      <div className="container sm:flex justify-between items-center  rounded">
      <img 
         src="https://cdn.discordapp.com/attachments/1157269732219691038/1199622531003465728/cars-removebg-preview.png?ex=65c3368b&is=65b0c18b&hm=7444ad51f09b5d7393b17cf79b1a8abf3dac5abd2250ce3f31b9b6b14b72ead3&" 
         alt="" 
         style={{ width: "120px", height: "auto" }} 
       />

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] mr-3">
          

          <div className="relative">
            <Link href={'/shooping/cart'}>      <ShoppingCartIcon style={{ color: 'black' }} /></Link>
            
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
              {cartStore.cart.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
