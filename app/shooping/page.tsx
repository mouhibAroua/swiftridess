"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footers from "../Home/footer/page";
import { useCartStore } from "./stores/CartStore";
import Nav from "./navBar/page";
import Banner from "./navBar/banner";
import Link from "next/link";

interface Product {
  ProductID: number;
  Name: string;
  Description: string;
  Price?: number;
  ProductImage: string;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cartStore = useCartStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/allProducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Banner />
      <Nav />
      <button className="Carting">
        <ShoppingCartIcon />
      </button>
      <img
        className="Addss"
        src="https://images2.imgbox.com/ae/56/NYUj4Qks_o.png"
      />
      <img
        className="explore"
        src="https://images2.imgbox.com/d0/5a/eWzj0Tmm_o.png"
      />
      <br />
      <br />
      <div className='flex justify-center items-center w-60 h-16 bg-red -mt-28 float-right mr-4 '>
         <Link href='/shooping/Product' > <h1 onClick={()=>{}} className='text-white cursor-pointer' > View All Products</h1>   </Link>
         </div>

      {products.map((product) => (
        <div className="product-card">
          <div className="product-img-container">
            <a href={`/shooping/ProcutDetails/${product.ProductID}`}>
              <div
                className="product-img"
                style={{ backgroundImage: `url(${product.ProductImage})` }}
              ></div>
            </a>
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.Name}</h2>
            <p className="product-description">{product.Description}</p>
            {product.Price !== undefined && (
              <p className="product-price">{product.Price} DT</p>
            )}
        </div>
            <div className="favourite">
              <FavoriteIcon />
            </div>

            <button>
              <div className="addto">
                <ShoppingCartIcon />
              </div>
            </button>
          </div>
      ))}
      <div>
        <br />
        <br />

        <Footers />
      </div>
    </div>
  );
};

export default ProductCard;
