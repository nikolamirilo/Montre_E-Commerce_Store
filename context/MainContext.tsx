"use client"
import React, { createContext, useContext, useState } from "react"
import AuthContextProvider from "./AuthContext"

export const MainContext = createContext({})

export const useMainContext = () => {
  return useContext(MainContext)
}

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  return (
    <MainContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </MainContext.Provider>
  )
}
