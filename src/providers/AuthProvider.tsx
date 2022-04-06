import { ReactNode, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { AuthService } from "../services/AuthService"
import { LoginRequestDataTypes } from "../types"

type AuthProviderTypes = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderTypes) => {
  const navigate = useNavigate()

  const [user, setUser] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const loadUserFromSession = useCallback(async () => {
    try {
      const email = sessionStorage.getItem("user")
      if (email) setUser(email)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      sessionStorage.removeItem("user")
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
