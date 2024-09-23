import React, { useContext, useState } from "react";
import { MobileCategoryCard } from "./MobileCategoryCard";
import Motorola5g from "../assets/images/mobileImage/motorola5g.jpg";
import Motorola from "../assets/images/mobileImage/motorola.jpg";
import Oneplus from "../assets/images/mobileImage/oneplus.jpg";
import Samsung from "../assets/images/mobileImage/samsung.jpg";
import Xiaomi from "../assets/images/mobileImage/xiaomi.jpg";
import Blu from "../assets/images/mobileImage/Blu.jpg";
import SamsungGalaxy from "../assets/images/mobileImage/samsung-galaxy.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDrawer from "./BaseComponents/Drawer";
import { AppContext } from "./AppContext";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  laptop: { breakpoint: { max: 992, min: 0 }, items: 4 },
};

const mobileData = [
  {
    image: Motorola,
    title: "Motorola Pro Max",
    description: "incl of offers",
    price: "$999.99",
  },
  {
    image: Motorola5g,
    title: "Motorola 5g Pro Max",
    description: "incl of offers",
    price: "$929.9",
  },
  {
    image: Oneplus,
    title: "Oneplus CE2",
    description: "incl of offers",
    price: "$23",
  },
  {
    image: Xiaomi,
    title: "Xiaomi x2",
    description: "incl of offers",
    price: "$56.66",
  },
  {
    image: Samsung,
    title: "Samsung M30",
    description: "incl of offers",
    price: "$999.99",
  },
  {
    image: SamsungGalaxy,
    title: "Samsung Galaxy A12",
    description: "incl of offers",
    price: "$28.99",
  },
  {
    image: Blu,
    title: "Blue Note 4",
    description: "incl of offers",
    price: "$888",
  },
];

export const MobileCategory = () => {
  const [cartData, setCartData] = useState([]);
  const { state,setState } = useContext(AppContext);
  const handleAddToCart = (item) => {
    console.log(item,"item+++")
    setState((prev) => [...prev, item]); 
  };

  console.log(state,"state+++")

  return (
    <div className="mobile-category mt-8 ">
      <div className="mobile-category-grid  pt-8 w-[98%] mx-auto  bg-white">
        <Carousel responsive={responsive}>
          {mobileData.map((item, index) => (
            <MobileCategoryCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </Carousel>
      </div>
      <CustomDrawer cartData={cartData} />

    </div>
  );
};
