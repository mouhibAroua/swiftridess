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
import "./shopss.css"
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


<div>

<center>
<img src="https://images2.imgbox.com/d6/f7/piF1LPIQ_o.png" alt="" width={1550} height={1000} />
<img src="https://images2.imgbox.com/b3/93/hoTYLDwL_o.png" alt="" width={1550} height={1000} />

</center>
</div>



<div>
<div className='ml-10'>
    <div className='mb-10'>
    </div>
    <div className='grid grid-cols-2'>
    
    </div>
    <div style={{}}  id="div-div" className='flex gap-7 overflow-auto'>
      {flash.map((el,i)=>(
        <div  >
        <div className='w-80 h-72  mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
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
        )}          <Link href={`/shooping/ProcutDetails/${el.ProductID}`} ><img className='mainimgss' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" onClick={()=>{
            }} /></Link>
            
          </div>
          <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>{el.Price} DT</h1>
         </div>
   
         </div>
                ))}
                 </div>
                 <div style={{'margin-left':'75%','margin-top':'-390px'}} className='flex justify-center items-center w-80 h-16 bg-red mt-16 '>
         <Link href='/shooping/Product' > <h1 onClick={()=>{}} className='text-white cursor-pointer' > View All Products</h1>   </Link>
         
        </div>
    </div>
    </div>
    <img className="footerss" src="https://images2.imgbox.com/71/39/URV9poC5_o.png" alt="" width={1000} height={1000} />
    <img className="footersss" src="https://images2.imgbox.com/f6/b7/JjIVqTxd_o.png" alt="" width={1550} height={1000} />

</>

  );
  
}
export default Home;