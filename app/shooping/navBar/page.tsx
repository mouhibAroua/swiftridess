import Link from "next/link";
import React from "react";
import './nav.css'

const Navbar = () => {
  return (
    <div className="hidden lg:block ">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish ">
          <Link className="navbar__link relative text-black text-capitalize	" href="/company/DashBoard">
            HOME
          </Link>
          <Link className="navbar__link relative text-black text-capitalize	" href="/shooping">
           Shopping
          </Link>
          <Link className="navbar__link relative text-black text-capitalize	" href="/shooping/Product">
            All Products
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
