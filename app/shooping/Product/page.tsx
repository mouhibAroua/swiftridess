"use client"
import Nav from "../nav/page";
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios"
import Link from 'next/link'; 
import "../shopss.css"

import { log } from "console";
const Product: React.FC = () => {
  const [All, setAll] = useState<any[]>([]);
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);
const [index, setIndex] = useState<number>(-1);
const userId = localStorage.getItem('userId');
console.log(userId)
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/allProducts');
        if (!response.ok) {
          throw new Error('Error fetching all products');
        }
        const data = await response.json();
        setAll(data);
      
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const addCart=(obj:object)=>{
    axios.post("http://localhost:3000/api/cart/addCart",obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))
  }
  
 

console.log(All);
return (
    <>
  <Nav/>
    <div  className='mr-10 ml-10 mb-20 gap-7'>
    
          <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>
      <div className='flex  gap-4 flex-wrap shadow-sm'>
      {All.map((All,i)=>(
        <div key={i} className=''>
          <div className='w-80 h-72  mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          {index === i && showAddToCart && (
          <button
            className="cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute mt-56"
            onClick={() =>
              addCart({
                NameCart: All.Name,
                CartImage: All.ProductImage,
                Price: All.Price,
                Quantity: All.Quantity,
                company_idcompany: userId,
              })
            }
          >
            Add To Cart
          </button>
        )}          <Link href={`/shooping/ProcutDetails/${All.ProductID}`} ><img className='mainimgss' src={All.ProductImage[0]?All.ProductImage[0]:All.ProductImage} alt="" onClick={()=>{
            }} /></Link>
            
          </div>
          <h1>{All.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>{All.Price} DT</h1>
         </div>
        </div>
      ))}
        
      </div>
    

    </div>

    </>
  )
}

export default Product;