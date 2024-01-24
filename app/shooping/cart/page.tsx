"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useRouter} from 'next/navigation';
import "../shopss.css"


function Cart() {
  const userId = localStorage.getItem('idcompany');
  const [cartData, setCartData] =  useState<[]>([]);
  const [refresh,setRefresh] = useState<boolean>(true);
  const router=useRouter()
  const [couponCode, setCouponCode] = useState(''); 
  const [discount, setDiscount] = useState(0);
  const [notification, setNotification] = useState(''); 

const navigate=(path:string)=>{
router.push(path)
}
  const deleteC = (CartID:number) => {
    console.log('cart ID:', CartID);
    axios.delete(`http://localhost:3000/api/cart/deleteCart/${CartID}`)
      .then((res) => {
        console.log(res.data)
        
      })
      .catch((err) => {
        console.log(err);
      });
      setRefresh(!refresh)
      
  }
  
  

  useEffect(() => {
    axios.get(`http://localhost:3000/api/cart/UserCart/${userId}`)
      .then((response) => {
        console.log('houss', response.data);
        setCartData(response.data);
       
      })
      .catch((error) => console.log(error));
  }, [refresh])

  const calculateSubtotal = (quantity:number, price:number) => {
    return quantity * price;
  };

  const handleCouponApply = () => {
    if (couponCode === 'RBK20') {
      setDiscount(0.2);
      setNotification('Congratulation: You got a 20% discount!'); 
    } else {
      setNotification('Invalid coupon code.'); 
    }
  };

  return (
    <div>
      <div className='ml-40 mt-20'>
        <h1 className='text-gray-300'>
          Home / <span className='text-black'> Cart</span>
        </h1>

        <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
          <h1 className='ml-20'>Product</h1>
          <h1 className='ml-20'>Price</h1>
          <h1 className='ml-20'>Quantity</h1>
          <h1 className='ml-10'>Subtotal</h1>
        </div>
        {cartData.map((item:any, i) => (
          <div key={i} className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 ' style={{'display':'flex','justifyContent':'space-around'}}>
           
           <h1 className='ml-5'>{item.NameCart}</h1>
            <img className='image' src={item.CartImage[0]} alt="no-content" />
            
            <h1 className='pricc'>{item.Price} DT</h1>
            <input
              className='w-10 ml-10 border-gray-300 border rounded'
              type="number"
              value={item.Quantity || 1}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
              }}
            />
            <h1 className='pricee'>{calculateSubtotal(item.quantity || 1, item.Price)} DT</h1>
            <MdDelete className='ml-10 cursor-pointer'  onClick={() => { deleteC(item.CartID)}}/>
            
          </div>
          
        ))}



        <div className='mt-20 '>
          <input className='border-gray-300 border rounded w-48 h-12 text-center text-sm' type="text" placeholder='Coupon Code' />
          <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
        </div>

        <img className="imga" src="https://images2.imgbox.com/fc/97/c24stbXg_o.png" alt=""></img>

          <h3 className='sub'>Subtotal: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 1, item.Price), 0)}$</h3>
          <br/>
          <h3 className='sub'>Shipping: Free</h3>
          <br/>
          <h3 className='sub'>Total: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 1, item.Price), 0)}$</h3>
          <br/>

          <button
          onClick={()=>navigate('/shooping/paiement')} 
          className=' bg-red w-40 h-12 border rounded text-white text-sm' id='check'>Checkout</button>
        </div>
      </div>
  );
}

export default Cart;