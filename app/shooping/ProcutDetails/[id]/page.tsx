"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../navBar/banner";
import Foot from "../../../Home/footer/page";
import "./product.css";
import Stars from "./stars";
import Quantity from "./quantity";
import { useCartStore } from "../../stores/CartStore";
import FavoriteIcon from "@mui/icons-material/Favorite";





const ProductInfo: React.FC = () => {
  const [product, setProduct] = useState<any>(null);

  const userId = localStorage.getItem('idcompany');
  var currentUrl = window.location.href;
  var endPoint = currentUrl.split("/");
  var oneProduct = endPoint[endPoint.length - 1];
  const cartStore = useCartStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/getOneProd/${oneProduct}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product information:", error);
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

  return (
    <div>
      <Nav />
      {product ? (
        <div>
          <h2 className="name">{product.Name}</h2>
          <p className="desc"> {product.Description}</p>
          <p className="price">{product.Price}DT</p>
          <div className="stars ">
            <Stars />
          </div>
          <p className="ratings">(150 reviews) </p>
          <Quantity />
          {product.ProductImage && (
            <div>
              <img
                className="imageprod"
                src={product.ProductImage}
                alt="Product"
              />
            </div>
          )}
          <button className="CartBtn"   onClick={() =>
                      addCart({
                        NameCart: product.Name,
                        CartImage:  product.ProductImage,
                        Price: product.Price,
                        Quantity: product.Quantity,
                        company_idcompany: userId,
                      })
                    }>
            <span className="IconContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
            <p className="text">Add to Cart</p>
          </button>
          <div className="wish">
            {" "}
            <FavoriteIcon />{" "}
          </div>
          <img
            className="deli"
            src="https://images2.imgbox.com/2f/4c/gm8r8ztx_o.png"
            alt=""
          ></img>
                    <img
            className="related"
            src="https://images2.imgbox.com/5e/0e/2opnK56s_o.png"
            alt=""
          ></img>

          <Foot/>
        </div>
      ) : (
        <p>Loading product information...</p>
      )}
    </div>
  );
};

export default ProductInfo;
