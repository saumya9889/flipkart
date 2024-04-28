import React from "react";
import flipkartlogo from "../assets/images/flipkartlogo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="left-side">
          <div className="logo">
            <img src={flipkartlogo} alt="logo" />
            </div>
            <span className="search">
              <b>
                <i class="fas fa-search"></i>
              </b>
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </span>
          </div>
          <div className="right-side">
           <div className="shop">
           <i class="fa-solid fa-store"></i>
           <button className="seller"><a href="/becomeaseller">Become a seller</a></button>
           </div>
           <div className="signup">
           <i class="fa-regular fa-user"></i>
           <button className="signin"><a href="/signin">Sign in</a></button>
           </div>
           <div className="carts">
           <i class="fa-solid fa-cart-shopping"></i>
           <button className="cart"><a href="/cart">cart</a></button>
           </div>
           <div className="dropdowns">
           <i class="fa-solid fa-ellipsis-vertical"></i>
           <button className="dropdown"><a href="/dropdown"> </a></button>
           </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
