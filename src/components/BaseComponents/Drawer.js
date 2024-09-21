import React, { useState, useEffect , useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AppContext } from "../AppContext";

export default function CustomDrawer({ open, onClose, cartData = [] }) {
  const [quantities, setQuantities] = useState([]);
  const { state, setState } = useContext(AppContext);
  console.log(state,"state++")
  // Initialize quantities based on the cartData length
  useEffect(() => {
    setQuantities(cartData.map(() => 1)); // Initialize all quantities to 1
  }, [cartData]);

  const increaseQuantity = (index) => {
    console.log(index,"index++")
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
        {state?.map((item, index) => (
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
                  <span
                    className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                    onClick={() => setState("Context API Updated!")}>
                  
                    context
                  </span>
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
      <Drawer open={open} onClose={onClose} anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
}
