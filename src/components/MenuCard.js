import React, { useState } from "react";

const MenuCard = ({ title, image, icon, description, megaMenuData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 console.log(title, "hbsdcd")
  return (
    <div className={`card ${icon ? "dropdown-wrapper" : ""}`}>
      <figure className="max-w-[max-content] rounded overflow-hidden shadow-lg">
        <img className="image" src={image} alt={title} />
      </figure>
      <div className="card-content border-none" onClick={toggleDropdown}>
        <h2 className="title" style={{ fontSize: ".8rem", width: "100%" }}>
          {title}
        </h2>
        <span>{icon}</span>
        <p>{description}</p>
      </div>
      {/* {isDropdownOpen && ( */}
      <div className={`dropdown-list flex flex-1 ${
            title == "Grocery" ? "Grocery-Open" : "Grocery-Open"
          }`} >
        <ul
          // className={`dropdown-list ${
          //   title === "Grocery" ? "Grocery-Open" : ""
          // }`}
          style={{
            position: "fixed",
            top: "58%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            height: "50%",
            width: "max-content",
            zIndex: 999,
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {megaMenuData.map((item, index) => (
            <li>{item.title}</li>
          ))}
        </ul>
        <div
          className={`mega-menu ${isDropdownOpen ? "open" : ""}`}
          style={{
            position: "fixed",
            top: "54%",
            left: "50%",
            zIndex: 999,
            backgroundColor: "white",
          }}
        >
          {/* <div className="mega-menu-column">
              <h3>Category 1</h3>
              <ul>
                <li>Mega Menu Item 1</li>
                <li>Mega Menu Item 2</li>
                <li>Mega Menu Item 3</li>
              </ul>
              <h3>Category 1</h3>
              <ul>
                <li>Mega Menu Item 1</li>
                <li>Mega Menu Item 2</li>
                <li>Mega Menu Item 3</li>
              </ul>
            </div> */}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default MenuCard;
