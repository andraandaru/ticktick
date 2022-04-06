import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

type withAuthTypes = (Component: FC) => FC

const withAuth: withAuthTypes = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { isAuthenticated, isLoading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) navigate("/login")
      }
    })

    return isAuthenticated && !isLoading ? <Component /> : null
  }

  return Authenticated
}

export default withAuth
