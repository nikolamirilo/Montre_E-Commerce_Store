"use client";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
