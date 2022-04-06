import { PlusIcon, ViewBoardsIcon } from "@heroicons/react/outline"
import { useCallback, useEffect, useState } from "react"
import Board from "../components/Board"
import Card from "../components/Card"
import withAuth from "../components/HOC/withAuth"
import BaseLayout from "../components/Layouts/BaseLayout"
import CreateTicketModal from "../components/Modal/CreateTicketModal"
import { useModal } from "../contexts/modal"
import { TicketService } from "../services/TicketService"
import { BoardDataTypes } from "../types"

const HomePage = () => {
  const [boards, setBoards] = useState<BoardDataTypes[]>([])

  const { onOpen, isOpen, onClose } = useModal()

  const loadBoards = useCallback(async () => {
    const boards = await TicketService.getTickets()
    setBoards(boards)
  }, [])

  const handleClose = () => {
    loadBoards()
    onClose()
  }

  useEffect(() => {
    loadBoards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            onClick={onOpen}
          >
            Add a New Ticket{" "}
            <span>
              <PlusIcon className="h-4 w-4 " />
            </span>
          </button>
        </div>
        {/* Board Column */}
        <div className="my-5 grid flex-1 gap-5 lg:grid-cols-3">
          {boards.map((board, idx) => (
            <Board key={idx} status={board.boardStatus}>
              {board.tickets.map((ticket) => (
                <Card key={ticket.id} data={ticket} />
              ))}
            </Board>
          ))}
        </div>
      </div>
      <CreateTicketModal isOpen={isOpen} handleClose={handleClose} />
    </BaseLayout>
  )
}

export default withAuth(HomePage)
