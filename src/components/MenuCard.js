import React, { useState } from "react";

const MenuCard = ({ title, image, icon, description, megaMenuData, ElectronicData, subGroceryData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [istoggleDropdown, setIstoggleDropdown]=useState("");
  const [istoggleSubDropdown, setIstoggleSubDropdown]=useState(false);
  

  const toggleDropdown = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
    setIstoggleDropdown(e)
  };
  const handleSubMenu=(e)=>{
    // setSubMenu(e)
    if(e === "Soups"){
      setIstoggleSubDropdown(!istoggleSubDropdown)
    }
    
  }
 
 const menuData=istoggleDropdown==="Grocery"?megaMenuData:istoggleDropdown==="Electronics"?ElectronicData:[];

  return (
    <div className={`card ${isDropdownOpen ? "open" : ""}` } style={{border:"none"}}>
      <div className="image-container m-auto">
        <img className="image" src={image} alt={title} />
      </div>
      <div
        id="multi-dropdown"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
        }}
      >
        <ul className="py-2 px-0 text-sm text-gray-700 dark:text-gray-200">
          {menuData?.map((item, index) => (
            <li key={index} className="w-full hover:bg-[#9ca2ad63] transition-all hover:transition-all flex items-center flex-1">
              <a
                href="#"
                className="block px-4 py-2  text-black no-underline transition-all hover:transition-all hover:text-white hover:font-bold  text-[14px] dark:hover:bg-gray dark:hover:text-white"
              >
                {item.title}
              </a>
              <span className="  text-[10px]  text-black" onClick={(e)=>handleSubMenu(item?.title)}>{item?.icon}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="sub-dropdown"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
          istoggleSubDropdown? "block" : "hidden"
        }`}
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          left: "240px",
          transform: "translateX(-50%)",
          zIndex: 999,
        }}
      >
        <ul className="py-2 px-0 text-sm text-gray-700  dark:text-gray-200">
          {subGroceryData?.map((item, index) => (
            <li key={index} className="w-full hover:bg-[#9ca2ad63] transition-all hover:transition-all">
              <a
                href="#"
                className="block px-4 py-2  text-black no-underline transition-all hover:transition-all hover:text-white hover:font-bold  text-[14px] dark:hover:bg-gray dark:hover:text-white"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-content border-none" onClick={(e)=>toggleDropdown(title)} >
        <h2 className="title" style={{ fontSize: ".8rem", width: "100%" }}>
          {title}
        </h2>
        <span className="dropdown-icon" >
          {icon}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
