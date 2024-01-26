import React from 'react'

import Nav from '../navBar/page'
import { FcCheckmark } from "react-icons/fc";
import { VscChromeClose } from "react-icons/vsc";
import { VscArrowDown } from "react-icons/vsc";

function Paiment() {
  return (
    <>
    <Nav/>
    <div className='ml-40 mt-20'>
        <h1 className='text-gray-300'>
          Home / <span className='text-black'> Paiment</span>
        </h1>
        <div className='ml-[400px]'>
          <h1 className='text-3xl font-serif  '> Select Your Paiment Method</h1>

          <div className='flex ml-[100px] mt-[30px]'>
          <img src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png" alt="" className='w-[80px]'/>
          <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png" alt="" className='w-[80px]' />
          </div>

        </div>
        <div className='ml-[200px] mt-[20px] text-lg flex'> <h1 className='text-3xl font-serif'>Type Your Information Of Paiment</h1>
        <VscArrowDown  size={30}/>
        </div> <br />
        <hr className='text-gray-300 w-[1100px]'/>
        <div className='ml-[400px] shadow border-black border rounded w-[500px] h-[200px] mt-[30px]'> 
        <div className='flex mt-[20px] ml-[20px]'>
        <h1>Your Bank Card Number : </h1>
        <input type="text" className='shadow border rounded ml-[10px]'/>
        </div>
        <hr className='text-gray-300 mt-[14px]'/>
        <div className='flex mt-[20px] ml-[40px]'>
          <h1>Verification Code :</h1>
          <input type="text" className='shadow border rounded ml-[44px]' />
        </div>
        <hr className='text-gray-300 mt-[14px] '/>
        <div className='flex ml-[150px] mt-[30px]'>
        <FcCheckmark   size={30} className='ml-[20px] cursor-pointer'/>
        <VscChromeClose size={30}  style={{'color':'red','margin-left':'90px ','cursor':'pointer' }}/>
        </div>
       
        
        </div>
      

    </div>
    
    </>
  )

}

export default Paiment