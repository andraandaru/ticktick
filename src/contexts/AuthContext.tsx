import { createContext } from "react"
import { LoginRequestDataTypes } from "../types"

const AuthContextDefault = {
  isAuthenticated: false,
  user: "",
  login: (data: LoginRequestDataTypes) => {},
  logout: () => {},
  isLoading: true,
}

export const AuthContext = createContext(AuthContextDefault)
