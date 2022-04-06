import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { useNavigate, RouteProps, Route } from "react-router-dom"
import { AuthService } from "../services/AuthService"
import { LoginRequestDataTypes } from "../types"

const AuthContextDefault = {
  isAuthenticated: false,
  user: "",
  login: (data: LoginRequestDataTypes) => {},
  logout: () => {},
  isLoading: true,
}

const AuthContext = createContext(AuthContextDefault)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const loadUserFromSession = useCallback(async () => {
    try {
      const email = sessionStorage.getItem("user")
      if (email) setUser(email)
      setIsLoading(false)
    } catch (err) {
      sessionStorage.removeItem("user")
      console.log(err)
      setUser("")
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    loadUserFromSession()
  }, [])

  const login = async (data: LoginRequestDataTypes) => {
    try {
      const res = await AuthService.login(data)
      if (res?.email) {
        sessionStorage.setItem("user", res.email)
        setUser(res.email)
        navigate("/")
      }
    } catch (err) {
      throw err
    }
  }

  const logout = () => {
    sessionStorage.removeItem("user")
    setUser("")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
