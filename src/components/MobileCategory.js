
import React from 'react';
import { MobileCategoryCard } from './MobileCategoryCard';
import Motorola5g from "../assets/images/mobileImage/motorola5g.jpg";
import Motorola from "../assets/images/mobileImage/motorola.jpg";
import Oneplus from "../assets/images/mobileImage/oneplus.jpg";
import Samsung from "../assets/images/mobileImage/samsung.jpg";
import Xiaomi from "../assets/images/mobileImage/xiaomi.jpg";
import Blu from "../assets/images/mobileImage/Blu.jpg";
import SamsungGalaxy from "../assets/images/mobileImage/samsung-galaxy.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const mobileData = [
    { image: Motorola, title: "Motorola Pro Max", description: "incl of offers" },
    { image: Motorola5g, title: "Motorola 5g Pro Max", description: "incl of offers" },
    { image: Oneplus, title: "Oneplus CE2", description: "incl of offers"},
    { image: Xiaomi, title: "Xiaomi x2", description: "incl of offers"},
    { image: Samsung, title: "Samsung M30", description: "incl of offers"},
    { image: SamsungGalaxy, title: "Samsung Galaxy A12", description: "incl of offers"},
    { image: Blu, title: "Blue Note 4", description: "incl of offers"},
];

export const MobileCategory = () => {
  return (
    <div className='mobile-category mt-8 '>
      
        <div className="mobile-category-grid  pt-8 w-[98%] mx-auto  bg-white">
        <Carousel responsive={responsive} >
          {mobileData.map((item, index) => (  
            <MobileCategoryCard key={index} image={item.image} title={item.title} description={item.description} />
          ))}
          </Carousel>
        </div>
      
    </div>
  );
};
