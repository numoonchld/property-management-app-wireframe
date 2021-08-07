import React, { useState, createContext } from "react";

export const PropertiesContext = createContext();

const PropertiesContextProvider = (props) => {
  return (
    <PropertiesContext.Provider value={}>
      {props.children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesContextProvider;
