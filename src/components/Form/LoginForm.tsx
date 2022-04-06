import classNames from "classnames"
import { FormEvent, useState } from "react"
import { buttonClasses, commonInputClasses } from "../../classes/common"
import { useAuth } from "../../hooks/useAuth"
import CircleLoading from "../Feedback/CircleLoading"

const LoginForm = () => {
  const { login } = useAuth()

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

  return (
    <>
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
    </>
  )
}

export default LoginForm
