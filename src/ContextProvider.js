/* eslint-disable react/prop-types */
import React, { createContext } from 'react';

export const Context = createContext({});

const ContextProvider = ({ children, value }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
);
export default ContextProvider;
