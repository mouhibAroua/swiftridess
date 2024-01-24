"use client"
import { useState,useEffect } from 'react';
// import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import '../../shopss.css'
import Quantity from "./quantity"
import Product from '../../Product/page';
import axios from 'axios';
interface Product {
  ProductID: number;
  Name: string;
  ProductImage: string[];
  Price: string;
  Description: string;
  Availability:string;
  Quantity:number;

}
const ProductDetails: React.FC = () => {
  const [inp, setInp] = useState<number>(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [product, setProduct] = useState<Product>({});
  const userId = localStorage.getItem('idcompany');
  const handleImageHover = (imageSrc: string): void => {
    setHoveredImage(imageSrc);
  };
  const addCart=(obj:object)=>{
    axios.post("http://localhost:3000/api/cart/addCart",obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))
  }
  const handleImageLeave = () => {
    setHoveredImage(null);
  };
const ratingChanged = (newRating:number) => {
  console.log(newRating)
 
}

useEffect(() => {
  var currentUrl = window.location.href;
  var endPoint=currentUrl.split("/")
  var i=endPoint[endPoint.length-1]
  axios
    .get<Product>(`http://localhost:3000/api/products/getOneProd/${i}`)
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

console.log(product);

  return (
    <>
<div className="bg-white flex flex-row justify-center w-full">
<div className="bg-white w-[1437px] h-[1077px] ">
  <div className=''>
<div className="absolute w-[500px] h-[600px] top-[204px] left-[342px] bg-secondary rounded-[4px] overflow-hidden">
     <img className=" w-[446px] h-[546px]  left-[27px] "  src={hoveredImage || product.ProductImage&&product.ProductImage[0]} alt='Image0'  />
    </div>
    <div className="">
      {/* Map through images and display smaller images */}
      {product.ProductImage && product.ProductImage.map((imageSrc, index) => (
        <img
          key={index}
          alt='Image'
          className="otherimgs"
          onMouseOver={() => handleImageHover(imageSrc)}
          onMouseLeave={handleImageLeave}
        />
      ))}
    </div>
    </div>
  
   
    <Quantity/>


    <div className="title">
{product&&product.Name}
</div>
<div className="absolute top-[280px] left-[910px] font-heading-24px-semibold font-[number:var(--heading-24px-semibold-font-weight)] text-text-2 text-[length:var(--heading-24px-semibold-font-size)] tracking-[var(--heading-24px-semibold-letter-spacing)] leading-[var(--heading-24px-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-24px-semibold-font-style)]">
{product&&product.Description}
</div>
<div className="absolute top-[350px] left-[910px] font-heading-24px-regular font-[number:var(--heading-24px-regular-font-weight)] text-text-2 text-[length:var(--heading-24px-regular-font-size)] tracking-[var(--heading-24px-regular-letter-spacing)] leading-[var(--heading-24px-regular-line-height)] whitespace-nowrap [font-style:var(--heading-24px-regular-font-style)]">
{product&& product.Price &&product.Price}DT
        </div>
<div className="inline-flex items-start gap-[16px] absolute top-[314px] left-[910px]">
<div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
<ReactStars className="!relative !flex-[0_0_auto]"
 count={5} 
 onChange={ratingChanged}
 size={24}
 color2={'#ffd700'}
 style={{'margin-left':'15px'}} />
  <div className=" mb-10 relative w-fit mt-[9px] opacity-100 font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
              (150 Reviews)
            </div>
            </div>
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[9px] opacity-100 font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-button-1 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
              In Stock
            </div>
     </div>
     </div>
        <button onClick={()=>{addCart({NameCart:product.Name,CartImage:product.ProductImage[0],Price:product.Price,Quantity:product.Quantity,userUserID:userId})}} button="small" className="!absolute !left-[1072px] !top-[390px] bg-red rounded w-48 h-12 text-black"  hover={false}    >Add To Cart</button>
        <div className="absolute w-[399px] h-[180px] top-[503px] left-[897px] rounded-[4px] overflow-hidden border border-solid border-[#00000080]">
          <div className="absolute w-[399px] h-px top-[90px] left-0 opacity-50">
            <img className="absolute w-[399px] h-px -top-px left-0 object-cover" alt="Line" src="line-1.svg" />
          </div>
          <div className="inline-flex items-center gap-[16px] absolute top-[24px] left-[16px]">
            <CiDeliveryTruck  className="!relative !w-[40px] !h-[40px]" />
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                Free Delivery
              </div>
              <p className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[18px] underline whitespace-nowrap">
                Enter your postal code for Delivery Availability
              </p>
              </div>
          </div>
          <div className="inline-flex items-center gap-[16px] absolute top-[106px] left-[16px]">
            <TfiReload  className="!relative !w-[40px] !h-[40px]" />
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                Return Delivery
              </div>
              <p className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                <span className="font-title-12px-medium font-[number:var(--title-12px-medium-font-weight)] text-black text-[length:var(--title-12px-medium-font-size)] tracking-[var(--title-12px-medium-letter-spacing)] leading-[var(--title-12px-medium-line-height)] [font-style:var(--title-12px-medium-font-style)]">
                  Free 30 Days Delivery Returns.{" "}
                </span>
                <span className="underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="footerssss" src="https://images2.imgbox.com/f6/b7/JjIVqTxd_o.png" alt="" width={1550} height={1000} />

    </>
);
};
 export default ProductDetails;