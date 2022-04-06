import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../components/Form/LoginForm"
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])

  return !isAuthLoading ? (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center rounded bg-white p-8">
      <h1 className="text-center font-logo text-3xl font-semibold uppercase text-slate-800">
        Ticktick.IO
      </h1>
      <LoginForm />
    </div>
  ) : null
}

export default LoginPage
