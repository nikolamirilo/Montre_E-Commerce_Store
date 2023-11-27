import { User } from "@/typescript/interfaces"
import { ReactNode, createContext, useContext } from "react"

interface AuthContextType {
  user: User
  isAuthenticated: boolean
}

const defaultValue: AuthContextType = {
  user: { fullName: "", role: "customer" },
  isAuthenticated: false,
}

export const AuthContext = createContext(defaultValue)

export const useAuthContext = (): AuthContextType => {
  const contextValue = useContext(AuthContext)
  if (!contextValue) {
    // You might want to handle this case depending on your application logic
    throw new Error("useAuthContext must be used within an AuthContextProvider")
  }
  return contextValue
}

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const user: User = { fullName: "Nikola Mirilo", role: "customer" }
  const isAuthenticated: boolean = false

  return <AuthContext.Provider value={{ user, isAuthenticated }}>{children}</AuthContext.Provider>
}
