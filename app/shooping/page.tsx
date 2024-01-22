"use client"
import Nav from "./nav/page";
import React,{useEffect,useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa";
//import { AiOutlineShoppingCart } from "react-icons/ai";
//import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosPhonePortrait } from 'react-icons/io';
import { CiHeadphones } from 'react-icons/ci';
import { BsSmartwatch } from 'react-icons/bs';
import { IoCameraOutline } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiYoutubegaming } from 'react-icons/si';
import Image from 'next/image';
// import img from "../Image/high.png"
import { log } from "console";
import { useCartStore } from "./stores/CartStore";
const Home: React.FC = () => {
  const cartStore = useCartStore();
  const [products, setProducts] = useState<any[]>([]);
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [exp, setExp] = useState<any[]>([]);
  const [flash, setFlash] = useState<any[]>([]);
  const [change, setChange] = useState(false);
  const [index1, setIndex1] = useState(1);
  const [best,setBest]=useState([]);
  const userId = localStorage.getItem('idcompany');
   const router = useRouter();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/allProducts`)
      .then(r => {
        setProducts(r.data);
        console.log(r.data);
        let d = r.data.filter(e => {
          return e.Discount;
        });
        setFlash(d);
        setExp(r.data.slice(0, 8));
        setBest(d.slice(2))
      })
      .catch(err => console.log(err));
  }, []);

  const addCart = (obj: object) => {
    cartStore.setCart([...cartStore.cart, obj]);
    axios.post("http://localhost:3000/api/cart/addCart", obj)
      .then((res) => { console.log(res); })
      .catch((err) => console.log(err));
  };

  return(
    <>



<Nav/>

{/* <div>
<hr className='text-gray-300'/>
<hr className='text-gray-300'/>
           <div className=' flex justify-start m-11 gap-32 mt-40'>
         
           <div className=' w-4/5 h-96  grid grid-cols-2'>
            <div className='flex items-center '>
            <div className='grid gap-8'>
            <span>
            <img className=' w-80  overflow-hidden ' src="https://moondo.tn/81306-large_default/led-atmosphere-car-lights.webp" alt="" />
            </span>
          
            </div>
            
            <FaArrowRight id='arrow-id' color='white' size={25}/>
            </div>
            <img className='w-80  ' src="https://moondo.tn/81307-large_default/led-atmosphere-car-lights.webp" alt="" />
           </div>
           </div>
           <hr id="hr-unique" className=' rotate-90 w-96 absolute top-16 text-gray-300'/>
  </div> */}
<div>

<center>
<img src="https://www.tayara.tn/mediaGateway/resize-image?img=e2/e28fc2ae-f9fe-4371-b6c2-30156631da09&w=2000" alt="" width={1200} height={1500} />
</center>
</div>



<div>
<div className='ml-10'>
    <div className='mb-10'>
    </div>
    <div className='grid grid-cols-2'>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0' ><FaArrowRight /></div>
    
    </div>
    <div style={{}}  id="div-div" className='flex gap-7 overflow-auto'>
      {flash.map((el,i)=>(
        <div  >
        <div className='w-80 h-72 bg-gray mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-black '>-{el.Discount}%</div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><FaRegHeart size={20}/> </div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><MdOutlineRemoveRedEye size={20}/></div>
          {index === i && showAddToCart && (
          <button
            className="cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute mt-56"
            onClick={() =>{
              addCart({
                NameCart: el.Name,
                CartImage: el.ProductImage,
                Price: el.Price,
                Quantity: el.Quantity,
                company_idcompany: userId,
              })
            }}
          >
            Add To Cart
          </button>
        )}          <Link href={`/shooping/ProcutDetails/${el.ProductID}`} ><img className=' w-40' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" onClick={()=>{
            }} /></Link>
            
          </div>
          <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
         </div>
   
         </div>
                ))}
                 </div>
                 <div style={{'margin-left':'40%','margin-bottom':'10%'}} className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
         <Link href='/shooping/Product' > <h1 onClick={()=>{}} className='text-white cursor-pointer' > View el Products</h1>   </Link>
        </div>
      <hr className='w-5/6 ml-20 text-gray-300 mb-32'/>
    </div>
    </div>
 



   



<div>

      <center>
      <img src="https://img.freepik.com/photos-premium/diverses-pieces-accessoires-voiture-isoles-fond-blanc_771335-35715.jpg" alt="" width={1200} height={1500} />
      </center>
    </div>







<div>
<div>
        <div className='ml-10'>
         <div className=' mb-10'>
    <div className='grid grid-cols-2 mb-20'>
    <h1 className='text-5xl font-medium mt-10'>Explore Our Products</h1>
    </div>
    </div>
    <div className='flex gap-6 flex-wrap'>
      {exp.map((el,i)=>(
       <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'>
       <div>
       <img className=' w-32 ' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" />
       <h1>{el.Name}</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>${el.Price}</h1>
        </div>
        </div>
        </div>
    )
    )}   
        </div>
    </div>
    </div>
    </div>





    <div>
    <div className='ml-80 grid grid-cols-3 '>
        <div>
        <img className='rounded-full w-40 ml-4' src="https://st.depositphotos.com/27392032/60952/i/450/depositphotos_609525608-stock-photo-fast-shipping-delivery-truck-icon.jpg" alt="" />
        <h1 className='font-bold text-lg'>FREE AND FAST DELIVERY</h1>
        <h3 className='-ml-2'>Free delivery for all orders over $140</h3>
        </div>
        <div>
        <img className='rounded-full w-28 ml-4 mt-12' src="https://static.thenounproject.com/png/4074783-200.png" alt="" />
        <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
        <div>
            <img className='rounded-full w-28 ml-4 mt-12' src="https://cdn-icons-png.flaticon.com/512/95/95454.png" alt="" />
            <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
        <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
        </div>
    </div>
    </div>
</>
  );
}
export default Home;