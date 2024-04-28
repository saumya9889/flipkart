import React from "react";
import MenuCard from "../components/MenuCard";
import Grocery from "../assets/images/grocery.png";
import Mobile from "../assets/images/mobile.png";
import Toys from "../assets/images/toys.png";
import Homes from "../assets/images/homes.png";
import Wheelers from "../assets/images/twowheelers.png";
import Fashion from "../assets/images/fashion.png";
import Electronics from "../assets/images/electronics.png";
import Travel from "../assets/images/travel.png";
import Appliances from "../assets/images/appliances.png";

const menuData = [
  {
    image: Grocery,
    title: "Grocery",
    icon: <i className="fa-solid fa-chevron-down"></i>,
  },
  { image: Mobile, title: "Mobiles" },
  { image: Fashion, title: "Fashion" },
  {
    image: Electronics,
    title: "Electronics",
    icon: <i className="fa-solid fa-chevron-down"></i>,
  },
  { image: Homes, title: "Home & Furniture" },
  { image: Appliances, title: "Appliances" },
  {
    image: Travel,
    title: "Travel",
  },
  { image: Toys, title: "beauty Toys & More" },
  { image: Wheelers, title: "Two Wheelers" },
];

const megaMenuData = [
  { title: "Soups" , icon: <i className="fa-solid fa-chevron-right"></i>},
  { title: "Fuits" },
  { title: "Kitechen Things" },
  { title: "Household Things" },
  { title: "Washroom Things" },
];
const megaMenuElectronicData = [
{ title: "Phones" },
{ title: "Head Phone" },
{ title: "Tv's" },
{ title: "Washing machines" },
{ title: "Refrigerator" },
];
const subGroceryData = [
{ title: "Tide" },
{ title: "Surf Excel" },
{ title: "Dettol" },
{ title: "Pears" },
{ title: "LifeBuoy" },
];



const MegaMenuCard = () => {
  return (
    <>
      <div className="menu-list bg-[#ffffff] flex gap-8 justify-center items-center mx-auto my-[0.6rem] w-w98 p-4 min-h-[126px]">
        {menuData.map((menu, index) => (
          <MenuCard
            key={index}
            image={menu.image}
            title={menu.title}
            icon={menu.icon}
            megaMenuData={megaMenuData}
            ElectronicData={megaMenuElectronicData}
            subGroceryData={subGroceryData}
          />
        ))}
      </div>
    </>
  );
};

export default MegaMenuCard;
