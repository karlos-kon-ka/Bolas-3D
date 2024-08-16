// src/context/WindContext.jsx
import React, { createContext, useState } from 'react';

export const WindContext = createContext();

export const WindProvider = ({ children }) => {
  const [windDirection, setWindDirection] = useState([0, 10]); 

  return (
    <WindContext.Provider value={{ windDirection, setWindDirection }}>
      {children}
    </WindContext.Provider>
  );
};
