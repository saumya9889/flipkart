import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AppContext } from "../AppContext";

export default function CustomDrawer({ cartData }) {
  // const [quantities, setQuantities] = useState([]);
  const {
    count,
    state,
    setState,
    increment,
    decrement,
    cartOpen,
    handleCartClose,
  } = useContext(AppContext);

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
  console.log(cartData, "cartData++");
  useEffect(() => {
    // Filter out duplicates from cartData by comparing title, description and price
    const uniqueItems = cartData.filter((item, index, self) => {
      console.log(self, "self");
      // Find the first occurrence of the item in the array
      const firstOccurrence = self.findIndex(
        (t) =>
          t.title === item.title &&
          t.description === item.description &&
          t.price === item.price
      );
      console.log(firstOccurrence, "firstOccurrence");
      // If the current index is the same as the first occurrence, then it's a unique item
      return index === firstOccurrence;
    });
    console.log(uniqueItems, "uniqueItems++");
    setUniqueCartData(uniqueItems);
  }, [cartData]);

  const handleCartDelete = (title) => {
    // Filter out the item with the matching title
    const uniqueCartData = state.filter((item) => item.title !== title);
    setState(uniqueCartData); // Update the cart state with the filtered items
  };

  const totalPrice = uniqueCartData.reduce((total, item) => {
    // debugger
    console.log(item, "item+++");
    return total + Number(item.price.replace(/[^\d.-]/g, "")) * item.quantity;
  }, 0);

  console.log(totalPrice, "totalPrice+++");
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
      <List className="h-[80vh] overflow-y-auto">
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
                  <div className="flex items-center gap-2">
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
                    <button
                      className=" ml-8"
                      onClick={() => handleCartDelete(item.title)}
                    >
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <div className=" fixed bottom-0 px-8 pb-4 pt-8 w-full bg-[#ffffff]">
        {/* <h3>Total: ${getCartTotal().toFixed(2)}</h3>       */}
        <button className="max-w-full w-[256px] border-none justify-center items-center bg-[#e85892] relative m-0 cursor-pointer px-2 py-1 h-[41px] ">
          Place Order
        </button>
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
