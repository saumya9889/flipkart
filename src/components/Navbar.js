import React, { useState, useEffect } from "react";
import flipkartlogo from "../assets/images/flipkartlogo.png";
import CustomDrawer from "../components/BaseComponents/Drawer";

const Navbar = ( ) => {
 const [itemData,setItemData]= useState()
  useEffect (()=>{
    const retrieveData = localStorage.getItem("cartData");
    setItemData(retrieveData)
    console.log(retrieveData,"retej")

  },[])
  
  const [ishandleHamburgerMenu, setIshandleHamburgerMenu] = React.useState(false);
  const handleHamburgerMenu = () => {
    setIshandleHamburgerMenu(!ishandleHamburgerMenu); 
  }
  const [open, setOpen] = useState(false);

  const handleDrawer = ()  => {
    setOpen(true);
  }; 

  const handleCloseDrawer = ()  => {
    setOpen(false);
  }; 
  
  return (
    <header>
      <div className="container">
        <nav className="navbar flex items-center justify-between">
          <div className="left-side">
          <div className="logo">
            <img src={flipkartlogo} alt="logo" />
            </div>
            <span className="search lg:md:pl-[0px]  md:pl-[33px]">
              <b>
                <i class="fas fa-search"></i>
              </b>
              <input
              className="md:pl-[33px!important]"
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </span>
          </div>
          <div className="right-side">
          <div className="humburgermenu hidden" id="menus" onClick={handleHamburgerMenu}>
            <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
            <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
            <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
          </div>
          <div className={ `${ishandleHamburgerMenu ? "show-mobilemenu absolute shadow-sm" : "hide flex gap-5"} mobilemenu` } >
           <div className="shop md:w-[110px]">
           <i class="fa-solid fa-store"></i>
           <button className="seller"><a href="/becomeaseller">Become a seller</a></button>
           </div>
           <div className="signup">
           <i class="fa-regular fa-user"></i>
           <button className="signin"><a href="/signin">Sign in</a></button>
           </div>
           <div className="carts">
  <div className="cart-icon-container">
    <i className="fa-solid fa-cart-shopping"></i>
    <span className="carts-count">{itemData?.length}</span>
  </div>
  <button className="cart" onClick={handleDrawer}>
    Cart
  </button>
  <CustomDrawer open={open} onClose={handleCloseDrawer} />
</div>

           <div className="dropdowns">
           <i class="fa-solid fa-ellipsis-vertical"></i>
           <button className="dropdown"><a href="/dropdown"> </a></button>
           </div>
          </div>
          </div>
        </nav>
      </div>
      
    </header>
  );
};

export default Navbar;
