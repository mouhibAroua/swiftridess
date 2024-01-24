"use client"
import React, { useState } from 'react';
import "./marques.css"
import Bmw from "../../client/CarBrands/bmw/page"
import Link from 'next/link';  

const Categories: React.FC = () => {
  return (
    <div className='mt-10'>
      <div className="category-flex">
      <div id="bmw">
      <Link href={`http://localhost:3001/client/CarBrands/bmw` }>
            <img
              src="https://images2.imgbox.com/a1/2d/5z7BixpH_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>       
           </div>
        <div id="cupra">
        <Link href={`http://localhost:3001/client/CarBrands/cupra` }>
            <img
              src="https://images2.imgbox.com/1e/2d/aiH446dZ_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>   
        </div>
        <div className="category-flex1">
        <Link href={`http://localhost:3001/client/CarBrands/kia` }>
            <img
              src="https://images2.imgbox.com/c4/f9/TUoMA4py_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>   
        </div>

        <div className="category-flex1">
        <Link href={`http://localhost:3001/client/CarBrands/mercedess` }>
            <img
              src="https://images2.imgbox.com/06/77/gMjoj33I_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>   
        </div>
        <div id="suzuki"  >
        <Link href={`http://localhost:3001/client/CarBrands/suzuki` }>
            <img
              src="https://images2.imgbox.com/93/9a/uzsXdzRo_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>   
        </div>
        <div className="category-flex1">
        <Link href={`http://localhost:3001/client/CarBrands/skoda` }>
            <img
              src="https://images2.imgbox.com/45/1f/6BsCuUUh_o.png"
              alt="icon"
              className="category-icon"
            />
          </Link>   
        </div> 
      </div>
    </div>
  );
}

export default Categories;
