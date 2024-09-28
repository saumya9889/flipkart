// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(Array(10).fill(1)); 
    const [cartOpen, setCartOpen] = useState(false);
   
    const increment = (index) => {
        setCount(prevCount => {
            const newCount = [...prevCount]; // Create a new array
            newCount[index] += 1; // Increment the value at the specific index
            return newCount; // Return the new array
        });
    };
    
    const decrement = (index) => {
        setCount(prevCount => {
            const newCount = [...prevCount]; // Create a new array
            newCount[index] = newCount[index] > 1 ? newCount[index] - 1 : 1; // Decrement but ensure it doesn't go below 1
            return newCount;
        });
    };

const handleCartOpen = () => {
    setCartOpen(true); // Toggle cart open/close
  };

  const handleCartClose =() => {
    setCartOpen(false);
  }
    return (
        <AppContext.Provider value={{ state, setState, count, setCount, increment, decrement, cartOpen, setCartOpen, handleCartOpen, handleCartClose }}>
            {children}
        </AppContext.Provider>
    );
};
