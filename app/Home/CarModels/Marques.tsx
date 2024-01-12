"use client"
import React, { useState } from 'react';
import "./marques.css"


const Categories: React.FC = () => {
  return (
    <div>
      <div className="category-flex">
      <div id="bmw"  >
          <img src="https://images2.imgbox.com/a1/2d/5z7BixpH_o.png" alt="icon" className="category-icon" />
        </div>
        <div id="cupra">
            <img src="https://images2.imgbox.com/1e/2d/aiH446dZ_o.png" alt="icon" className="category-icon"/>
        </div>
        <div className="category-flex1">
            <img src="https://images2.imgbox.com/c4/f9/TUoMA4py_o.png" alt="icon" className="category-icon"/>
        </div>

        <div className="category-flex1">
            <img src="https://images2.imgbox.com/06/77/gMjoj33I_o.png" alt="icon" className="category-icon"/>
        </div>
        <div id="suzuki"  >
            <img src="https://images2.imgbox.com/93/9a/uzsXdzRo_o.png" alt="icon" className="category-icon"/>
        </div>
        <div className="category-flex1">
            <img src="https://images2.imgbox.com/45/1f/6BsCuUUh_o.png" alt="icon" className="category-icon"/>
        </div> 
      </div>
    </div>
  );
}

export default Categories;
