import { PlusIcon, ViewBoardsIcon } from "@heroicons/react/outline"
import React from "react"

type BoardsHeaderProps = {
  onOpen: () => void
}

const BoardsHeader = ({ onOpen }: BoardsHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-center space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
      <h4 className="flex items-center text-lg font-bold text-slate-600 md:text-3xl">
        <span>
          <ViewBoardsIcon className="mr-4 h-5 w-5" />
        </span>{" "}
        Ticket Board
      </h4>
      <button
        className="flex w-44 items-center justify-around rounded-md bg-blue-700 p-2 text-sm font-semibold text-slate-200 md:w-48 md:text-lg"
        onClick={onOpen}
      >
        Create Ticket
        <span>
          <PlusIcon className="h-4 w-4 " />
        </span>
      </button>
    </div>
  )
}

export default BoardsHeader
