"use client";
import React, { useContext, createContext, useMemo } from "react";

import { useGetProducts } from "../hooks/useGetProducts";
import type { StoreContextType } from "../utils/types";
import { useFilter } from "../hooks/useFilter";
import { useAlert } from "../hooks/useAlert";
import { useUser } from "../hooks/useUser";
import { useGetCart } from "../hooks/useGetCart";

const storeContext = createContext<StoreContextType | undefined>(undefined);

type contextProps = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<contextProps> = ({ children }) => {
  // Alert system
  const { alert, showAlert } = useAlert();

  // Cart management
  const { cart, dispatch } = useGetCart(showAlert);

  // Products and categories management
  const {
    categories,
    loading: productsLoading,
    principalProduct,
    products,
  } = useGetProducts(showAlert);

  // Filter management
  const { filter, handleFilterChange, filteredProducts, onGoFilter } =
    useFilter(products, showAlert);

  // Authentication management
  const {
    token,
    onSubmit,
    logout,
    user,
    loading: authLoading,
    users,
    LoginUser
  } = useUser(showAlert, dispatch);
  let usersList = users || [];
  let loginButton = LoginUser || (() => {});

  // Compute overall loading state
  const loading = productsLoading || authLoading;

  const value = useMemo(
    () => ({
      // Products and categories
      categories,
      loading,
      products,
      principalProduct,

      // Filtering
      filter,
      filteredProducts,
      handleFilterChange,
      onGoFilter,

      // Authentication
      token,
      onSubmit,
      logout,
      user,
      users : usersList,
      LoginUser: loginButton,

      // Cart
      cart,
      dispatch,

      // Alert
      alert,
      showAlert,
    }),
    [
      // Products and categories
      categories,
      loading,
      products,
      principalProduct,

      // Filtering
      filter,
      filteredProducts,
      handleFilterChange,
      onGoFilter,

      // Authentication
      token,
      onSubmit,
      logout,
      user,
      users,

      // Cart
      cart,
      dispatch,

      // Alert
      alert,
      showAlert,
    ]
  );

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

const useStoreContext = () => {
  const context = useContext(storeContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
};

export { ContextProvider, useStoreContext };
