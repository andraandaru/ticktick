import { FC } from "react"
import Navbar from "../Navbar"

const BaseLayout: FC = ({ children }) => {
  return (
    <div className="flex h-screen min-h-screen flex-col overflow-y-auto bg-white lg:overflow-hidden">
      <Navbar />
      <main className="flex flex-grow flex-col pl-40 md:pl-64">{children}</main>
    </div>
  )
}

export default BaseLayout
