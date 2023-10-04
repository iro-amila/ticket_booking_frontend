// StateContext.js
import React, { createContext, useContext, useState } from 'react';

const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [netWorkProps, setNetWorkProps] = useState({}); // Initial empty state

  return (
    <NetworkContext.Provider value={{ netWorkProps, setNetWorkProps }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetworkContext = () => useContext(NetworkContext);