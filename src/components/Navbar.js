import React, { useContext } from "react";
import flipkartlogo from "../assets/images/flipkartlogo.png";
import CustomDrawer from "../components/BaseComponents/Drawer";
import { AppContext } from "../components/AppContext";

const Navbar = () => {
  const { state } = useContext(AppContext);
  const { handleCartOpen } = useContext(AppContext);

  const [ishandleHamburgerMenu, setIshandleHamburgerMenu] =
    React.useState(false);
  const handleHamburgerMenu = () => {
    setIshandleHamburgerMenu(!ishandleHamburgerMenu);
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
            <div
              className="humburgermenu hidden"
              id="menus"
              onClick={handleHamburgerMenu}
            >
              <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
              <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
              <span className="w-[40px] h-[2px] bg-black mb-1 block"></span>
            </div>
            <div
              className={`${
                ishandleHamburgerMenu
                  ? "show-mobilemenu absolute shadow-sm"
                  : "hide flex gap-5"
              } mobilemenu`}
            >
              <div className="shop md:w-[110px]">
                <i class="fa-solid fa-store"></i>
                <button className="seller">
                  <a href="/becomeaseller">Become a seller</a>
                </button>
              </div>
              <div className="signup">
                <i class="fa-regular fa-user"></i>
                <button className="signin">
                  <a href="/signin">Sign in</a>
                </button>
              </div>
              <button className="carts relative" onClick={handleCartOpen}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className=" absolute left-[20px] top-[-20px] bg-red-500 text-white h-[18px] w-[18px] text-xs rounded">
                  {state?.length || 0}
                </span>
                <span className="carts-text">Cart</span>
              </button>

              <CustomDrawer cartData={state} />

              <div className="dropdowns">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <button className="dropdown">
                  <a href="/dropdown"> </a>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
