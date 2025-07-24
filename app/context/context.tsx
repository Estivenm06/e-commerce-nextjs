"use client";
import React, { useContext, createContext } from "react";

import { useGetProducts } from "../hooks/useGetProducts";
import type { StoreContextType } from "../utils/types";

const storeContext = createContext<StoreContextType|undefined>(undefined);

type contextProps = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<contextProps> = ({ children }) => {
  const { products, loading, error } = useGetProducts();

  const value = {
    products,
    loading,
    error,
  };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

const useStoreContext = () => {
  const context = useContext(storeContext)
  if(!context){
    throw new Error('useStoreContext must be used within a StoreProvider')
  }
  return context;
};

export { ContextProvider, useStoreContext };
