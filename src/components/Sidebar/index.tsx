import { HomeIcon, LogoutIcon } from "@heroicons/react/outline"
import { useAuth } from "../../hooks/useAuth"

const Sidebar = () => {
  const { logout } = useAuth()

  return (
    <header>
      <div className="fixed inset-y-0 left-0 w-40 border-r-2 px-2 py-8 md:w-64 md:px-4">
        <h1 className="text-center font-logo text-lg font-semibold uppercase text-slate-800 md:text-2xl">
          Ticktick.IO
        </h1>
        <ul className="flex h-full flex-1 flex-col py-6">
          <li className="flex cursor-pointer items-center rounded-md bg-slate-200 p-4 text-sm font-bold md:text-lg">
            <span className="pr-2">
              <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />
            </span>
            Dashboard
          </li>
          <li
            className="mt-auto flex cursor-pointer items-center rounded-md border-2 border-dotted p-4 text-sm font-bold hover:bg-slate-200 md:text-lg"
            onClick={logout}
          >
            <span className="pr-2">
              <LogoutIcon className="h-4 w-4 md:h-5 md:w-5" />
            </span>
            Logout
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Sidebar