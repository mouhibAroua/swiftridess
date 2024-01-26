"use client"
import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios"
import Link from 'next/link'; 
import "../shopss.css"
import Banner from "../navBar/banner";
import Footers from "../../Home/footer/page";
import { useCartStore } from "../stores/CartStore";
import { log } from "console";
import Nav from '../navBar/page'
const Product: React.FC = () => {
  const [All, setAll] = useState<any[]>([]);
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const userId = localStorage.getItem('idcompany');
  console.log(userId);
  const cartStore = useCartStore();
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

  const addCart = (obj: object) => {
    cartStore.setCart([...cartStore.cart, obj]);
    axios.post("http://localhost:3000/api/cart/addCart", obj)
      .then((res) => { console.log(res) })
      .catch((err) => console.log(err))
  }

  console.log(All);

  return (
    <>
    <div className='navvbar'>
    <Banner />
    <Nav/>
    </div>     
      <div className='mr-10 ml-10 mb-20 gap-7'>
        <h1 className='text-black'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>
        <div className='flex gap-4 flex-wrap shadow-sm'>
          {All.map((product, i) => (
            <div key={i} className='border border-gray-600 rounded'>
              <div
                className='w-80 h-72 mt-10 flex-wrap border-gray-600 rounded '
                onMouseEnter={() => {
                  setShowAddToCart(!showAddToCart);
                  setIndex(i);
                }}
                onMouseLeave={() => {
                  setShowAddToCart(!showAddToCart);
                  setIndex(-1);
                }}
              >
                {index === i && showAddToCart && (
                  <button
                    className="cursor-pointer w-[320px] h-11 bg-black text-white flex justify-center items-center absolute mt-60"
                    onClick={() =>
                      addCart({
                        NameCart: product.Name,
                        CartImage: product.ProductImage,
                        Price: product.Price,
                        Quantity: product.Quantity,
                        company_idcompany: userId,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                )}
                <Link href={`/shooping/ProcutDetails/${product.ProductID}`}>
                  <img className='mainimgss' src={product.ProductImage[0] || product.ProductImage} alt="" />
                </Link>
              </div>
              <h1>{product.Name}</h1>
              <div className='flex gap-4'>
                <h1 className='text-red'>{product.Price} DT</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footers/>
    </>
  );
}

export default Product;
