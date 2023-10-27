"use client";
import React, { createContext, useContext } from "react";
import { AuthContextProvider } from "./AuthContext";

export const MainContext = createContext(null);

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MainContext.Provider value={null}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </MainContext.Provider>
  );
};
