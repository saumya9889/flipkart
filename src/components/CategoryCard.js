import React, { useState } from "react";

 export const CategoryCard = ({ title, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div className="mobile-card-content w-400  text-black left-4 pt-8 pl-8 pr-4"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <div  style={{
          border: "1px solid #eaeaea",
          borderRadius: "20px",
          padding: "10px",
          marginBottom: "10px",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}>
      <figure className="w-[230px]">
        <img
          className="image max-w-[70%] h-[180px] rounded-[20px] mx-auto"
          src={image}
          alt={title}
        />
      </figure>
      <figcaption className="w-full ">
        <h2 className="text-[1rem] text-black font-sans w-max font-[700] mx-auto leading-9">
          {title}
        </h2>
        <p className="pl-[5rem]">{description}</p>
      </figcaption>
      </div>
    </div>
  );
};
