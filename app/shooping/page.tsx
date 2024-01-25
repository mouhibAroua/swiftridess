"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "./stores/CartStore";
import Nav from "./navBar/page";
import Banner from "./navBar/banner";
import Link from "next/link";
import Hero from "./homeShop/hero";
import Footer from "./shopFooter/page";
import FFooter from '../Home/footer/page'

import "./shopss.css"


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
      <Hero />
      <div>
        <div className="container pt-16 "  style={{marginLeft:'50px'}}>
          <h2 className="font-medium text-2xl pb-4">New Products</h2>

          <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
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
                    <p className="product-price">{`${product.Price} DT`}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FFooter/>
    </div>
  );
};

export default ProductCard;