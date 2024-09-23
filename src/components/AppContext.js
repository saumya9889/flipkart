// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
// const data  = [
//     // {name:"demo"}
// ]
export const AppProvider = ({ children }) => {
    const [state, setState] = useState([]);
 
    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
