"use client"

import React, { useState, useEffect } from 'react';
// import Footer from '../Footer/page';
import Navbar from '../nav/page';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useRouter} from 'next/navigation';



function Cart() {
  const userId = localStorage.getItem('idcompany');
  const [cartData, setCartData] =  useState<[]>([]);
  const [refresh,setRefresh] = useState<boolean>(true);
  const router=useRouter()
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

  return (
    <div>
      <Navbar />
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
           
            <img className='w-10 ml-10' src={item.CartImage[0]} alt="no-content" />
            <h1 className='ml-10'>{item.Price}</h1>
            <input
              className='w-10 ml-10 border-gray-300 border rounded'
              type="number"
              value={item.Quantity || 1}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                {/*setCartData((prevData)=> {
                  const newData = [...prevData];
                  newData[i].quantity = isNaN(newQuantity) ? 1 : newQuantity;
                  return newData;
                });*/}
              }}
            />
            <h1 className='ml-20'>{calculateSubtotal(item.quantity || 1, item.Price)}$</h1>
            <MdDelete className='ml-10 cursor-pointer'  onClick={() => { deleteC(item.CartID)}}/>
            
          </div>
          
        ))}

        <div>
          <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm'></button>
          <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm float-right mr-56'></button>
        </div>

        <div className='mt-20 '>
          <input className='border-gray-300 border rounded w-48 h-12 text-center text-sm' type="text" placeholder='Coupon Code' />
          <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
        </div>

        <div className='float-right -mt-28 mr-56  shadow border-black border rounded w-80  text-start  '>
          <h1 className='ml-5 mt-2'>Cart Total</h1>
          <h3 className='ml-5 mt-6'>Subtotal: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 1, item.Price), 0)}$</h3>
          <hr className="text-gray-300 w-5/6 text-center" />
          <h3 className='ml-5 mt-6'>Shipping: Free</h3>
          <hr className="text-gray-300 w-5/6" />
          <h3 className='ml-5 mt-6'>Total: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 1, item.Price), 0)}$</h3>
          <button
          onClick={()=>navigate('/shooping/paiement')} 
           className='shadow border-gray-300 border bg black rounded ml-20 bg-black text-white w-40 h-12 mt-4'>Proceed to checkout</button>
        </div>
      </div>
      
    </div>
  );
}

export default Cart;