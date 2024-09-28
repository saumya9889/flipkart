import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AppContext } from "../AppContext";
import { Fragment } from "react";

export default function CustomDrawer({ cartData }) {
  const [quantities, setQuantities] = useState([]);
  const { count, increment, decrement, cartOpen, handleCartClose } =
    useContext(AppContext);

  // // Initialize quantities based on the cartData length
  // useEffect(() => {
  //   setQuantities(cartData.map(() => 1)); // Initialize all quantities to 1
  // }, [cartData]);

  const [uniqueCartData, setUniqueCartData] = useState([]);

  // Remove duplicates from cartData and initialize quantities
  // useEffect(() => {
  //   const uniqueItems = [];
  //   cartData.forEach((item) => {
  //     if (!uniqueItems.some((obj) => obj.id === item.id)) {
  //       uniqueItems.push(item);
  //     }
  //   });
  //   setUniqueCartData(uniqueItems); // Set unique cart data
  //   setQuantities(uniqueItems.map(() => 1)); // Initialize quantities for unique items
  // }, [cartData]);

  useEffect(() => {
    const uniqueItems = cartData.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1; // Increment quantity if already exists
      } else {
        acc.push({ ...item, quantity: 1 }); // Add new item with quantity
      }
      return acc;
    }, []);
    setUniqueCartData(uniqueItems);
  }, [cartData]);

  // const increaseQuantity = (index) => {
  //   const newQuantities = [...quantities]; // Array iterate
  //   newQuantities[index] = newQuantities[index] + 1;
  //   setQuantities(newQuantities);
  // };

  // const decreaseQuantity = (index) => {
  //   const newQuantities = [...quantities];
  //   if (newQuantities[index] > 1) {
  //     newQuantities[index] = newQuantities[index] - 1; // bs minus huaa hai
  //   }
  //   setQuantities(newQuantities);
  // };

  const DrawerList = (
    <Box sx={{ width: 323 }} role="presentation">
      <h2>Your Cart</h2>
      <List className="h-[80vh] overflow-y-scroll">
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
                 <div className="flex items-center gap-2" >
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                    // onClick={() => decreaseQuantity(index)}
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>
                  {/* <span>{quantities[index]}</span> */}
                  <span>{count[index]}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                    // onClick={() => increaseQuantity(index)}
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                  <span>
                  <i class="fa-regular fa-trash-can"></i>
                  </span>
                </div>
                </div>
               
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <div className=" fixed bottom-0 px-8 pb-4 pt-8 w-full bg-[#ffffff]">
        <button className="max-w-full w-[256px] border-none  justify-center items-center bg-[#e85892] relative m-0 cursor-pointer px-2 py-1 h-[41px] ">Place Order</button>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={cartOpen} onClose={handleCartClose} anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
}
