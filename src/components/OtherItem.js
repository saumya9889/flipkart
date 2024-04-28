
import React from 'react';
import Bag from "../assets/images/other/bag.jpg";
import PinkBag from "../assets/images/other/pinkbag.jpg";
import Boat from "../assets/images/other/boat.jpg";
import Ear from "../assets/images/other/ear.jpg";
import Earphone from "../assets/images/other/earphone.jpg";
import Handbag from "../assets/images/other/handbag.jpg";
import Uno from "../assets/images/other/uno game.jpg";
import Watch from "../assets/images/other/watch.jpg";
import PinkWatch from "../assets/images/other/pinkwatch.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CategoryCard } from './CategoryCard';


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  laptop: { breakpoint: { max: 992, min: 0 }, items: 4 }
};

const otherItemData = [
    { image: Handbag, title: "Handbag Multi", description: "incl of offers" },
    { image: Boat, title: "Boat watches", description: "incl of offers" },
    { image: Bag, title: "Bags Sale", description: "incl of offers" },
    { image: Watch, title: "Electronic", description: "incl of offers"},
    { image: PinkBag, title: "Pink Fav Bag", description: "incl of offers"},
    { image: PinkWatch, title: "Girls Watch", description: "incl of offers"},
    { image: Uno, title: "All types of game", description: "incl of offers"},
    { image: Earphone, title: "Earbaurds", description: "incl of offers"},
    { image: Ear, title: "Earbaurds all kind", description: "incl of offers"},
];

export const OtherItem = () => {
  return (
    <div className='mobile-category mt-8 '>
      
        <div className="mobile-category-grid  pt-8 w-[98%] mx-auto  bg-white">
        <Carousel responsive={responsive} >
          {otherItemData.map((item, index) => (  
            <CategoryCard key={index} image={item.image} title={item.title} description={item.description} />
          ))}
          </Carousel>
        </div>
      
    </div>
  );
};
