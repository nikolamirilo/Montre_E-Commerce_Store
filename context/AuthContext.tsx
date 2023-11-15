"use client";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: string = "Nikola Mirilo";
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
