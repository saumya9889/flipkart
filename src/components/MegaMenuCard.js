import React from "react";
import MenuCard from "../components/MenuCard";
import Grocery from "../assets/images/grocery.png";
import Mobile from "../assets/images/mobile.png";
import Toys from "../assets/images/toys.png";
import Home from "../assets/images/home.png";
import Wheelers from "../assets/images/twowheelers.png";
import Fashion from "../assets/images/fashion.png";
import Electronics from "../assets/images/electronics.png";
import Travel from "../assets/images/travel.png";
import Appliances from "../assets/images/appliances.png";

const menuData = [
  { image: Grocery, title: "Grocery" },
  { image: Mobile, title: "Mobiles" },
  { image: Fashion, title: "Fashion" },
  { image: Electronics, title: "Electronics" },
  { image: Home, title: "Home & Furniture" },
  { image: Appliances, title: "Appliances" },
  { image: Travel, title: "Travel" },
  { image: Toys, title: "beauty Toys & More" },
  { image: Wheelers, title: "Two Wheelers" },
];
const MegaMenuCard = () => {
  return (
    <>
      <div className="menu-list">
        {menuData.map((menuData, index) => (
          <MenuCard key={index} image={menuData.image} title={menuData.title} />
        ))}
      </div>
    </>
  );
};

export default MegaMenuCard;
