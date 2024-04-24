"use client";
import React, { createContext, useState, FC } from "react";

// Define the type for the context value
interface ContextValue {
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an initial value of null
const Context = createContext<ContextValue | null>(null);

// Define the props for the provider component
interface Props {
  children: React.ReactNode;
}

// Define the context provider as a functional component
const ContextProvider: FC<Props> = ({ children }) => {
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(true);

  // Return the provider with the context value
  return (
    <Context.Provider value={{ sideBarToggle, setSideBarToggle }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
export { Context };
