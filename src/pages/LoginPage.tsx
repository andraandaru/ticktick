import classNames from "classnames"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CircleLoading from "../components/Feedback/CircleLoading"
import { useAuth } from "../contexts/auth"

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated, isLoading: isAuthLoading } = useAuth()
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setInput({ ...input, [name]: value })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!input.email || !input.password) return

    try {
      setIsLoading(true)
      await login(input)
      setInput({ email: "", password: "" })
    } catch (err) {
      setIsLoading(false)
    }
  }

  const commonInputClasses = classNames(
    "mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
  )
  const buttonClasses =
    "mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2"

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
      <h3 className="p-4 text-center text-2xl font-semibold">Login to Your Account</h3>
      <form className="mx-auto w-4/5" onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          className={commonInputClasses}
          placeholder="Email Address"
          autoComplete="email"
          onChange={handleChange}
          value={input.email}
        />
        <input
          name="password"
          type="password"
          className={commonInputClasses}
          placeholder="Password"
          autoComplete="current-password"
          onChange={handleChange}
          value={input.password}
        />
        <button
          className={classNames(buttonClasses, {
            "cursor-not-allowed opacity-50": isLoading,
          })}
        >
          {isLoading && <CircleLoading />}
          {isLoading ? "Please Wait ..." : "Login"}
        </button>
      </form>
    </div>
  ) : null
}

export default LoginPage
