import React from 'react';

const MenuCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        {/* <p>{props.description}</p> */}
      </div>
    </div>
  );
};

export default MenuCard;