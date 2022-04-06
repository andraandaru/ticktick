import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate("/")
  }
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center rounded bg-white p-8">
      <h1 className="text-center font-logo text-3xl font-semibold uppercase text-slate-800">
        Ticktick.IO
      </h1>
      <h3 className="p-4 text-center text-2xl font-semibold">Login to Your Account</h3>
      <form className="mx-auto w-4/5" onSubmit={onSubmit}>
        <input
          type="email"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
          placeholder="Email Address"
          autoComplete="email"
        />
        <input
          type="password"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button className="mt-2 w-full rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
