// StateContext.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [postParams, setPostParams] = useState({}); // Initial empty state

  return (
    <StateContext.Provider value={{ postParams, setPostParams }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);