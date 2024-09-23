import React, { useState, useEffect  } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


export default function CustomDrawer({ open, onClose, cartData }) {
  const [quantities, setQuantities] = useState([]);
  
  // // Initialize quantities based on the cartData length
  // useEffect(() => {
  //   setQuantities(cartData.map(() => 1)); // Initialize all quantities to 1
  // }, [cartData]);
  
 const [uniqueCartData, setUniqueCartData] = useState([]);

  // Remove duplicates from cartData and initialize quantities
  useEffect(() => {
    const uniqueItems = [];
    cartData.forEach((item) => {
      if (!uniqueItems.some((obj) => obj.id === item.id)) {
        uniqueItems.push(item);
      }
    });
    setUniqueCartData(uniqueItems); // Set unique cart data
    setQuantities(uniqueItems.map(() => 1)); // Initialize quantities for unique items
  }, [cartData]);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities]; // Array iterate
    newQuantities[index] = newQuantities[index] + 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] = newQuantities[index] - 1; // bs minus huaa hai 
    }
    setQuantities(newQuantities);
  };

  const DrawerList = (
    <Box sx={{ width: 323 }} role="presentation">
      <h2>Your Cart</h2>
      <List>
        {uniqueCartData?.map((item, index) => (
          <ListItem key={index}>
            <div className="flex flex-row items-center justify-center gap-7">
              <img
                src={item.image}
                alt="img"
                className="img w-[70px] h-[75px]"
              />
              <div className="flex flex-col">
                <ListItemText
                  primary={item.title}
                  secondary={`${item.price}`}
                />
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={open} onClose={onClose}  anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
}
