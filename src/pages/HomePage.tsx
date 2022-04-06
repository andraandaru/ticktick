import { PlusIcon, ViewBoardsIcon } from "@heroicons/react/outline"
import BaseLayout from "../components/Layouts/BaseLayout"
import Board from "../components/Board"
import Card from "../components/Card"
import CreateTicketModal from "../components/Modal/CreateTicketModal"
import { useState } from "react"
import withAuth from "../components/HOC/withAuth"

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <BaseLayout>
      <div className="container mx-auto my-4 flex flex-1 flex-col p-3">
        {/* Board Header */}
        <div className="flex flex-col items-start justify-center space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h4 className="flex items-center text-lg font-bold text-slate-600 md:text-3xl">
            <span>
              <ViewBoardsIcon className="mr-4 h-5 w-5" />
            </span>{" "}
            Ticket Board
          </h4>
          <button
            className="flex w-44 items-center justify-around rounded-md bg-blue-700 p-2 text-sm font-semibold text-slate-200 md:w-48 md:text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Add a New Ticket{" "}
            <span>
              <PlusIcon className="h-4 w-4 " />
            </span>
          </button>
        </div>
        {/* Board Column */}
        <div className="my-5 grid flex-1 gap-5 lg:grid-cols-3">
          <Board status="Open">
            <Card />
            <Card />
          </Board>
          <Board status="In Progress">
            <Card />
          </Board>
          <Board status="Completed">
            <Card />
            <Card />
          </Board>
        </div>
      </div>
      <CreateTicketModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </BaseLayout>
  )
}

export default withAuth(HomePage)
