import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"
import { DragDropContext, DragUpdate, Droppable, DropResult } from "react-beautiful-dnd"
import { toast } from "react-toastify"
import { BOARD_COMPLETED, BOARD_IN_PROGRESS } from "../../constants/board-constants"
import { TicketService } from "../../services/TicketService"
import { BoardDataTypes } from "../../types"
import { getCurrentISOString } from "../../utils/common"
import Board from "../Board"
import Card from "../Card"
import CircleLoading from "../Feedback/CircleLoading"
import CreateTicketModal from "../Modal/CreateTicketModal"
import BoardsHeader from "./BoardsHeader"

const Boards = () => {
  const [boards, setBoards] = useState<BoardDataTypes[]>([])

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  const [errDrag, setErrDrag] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  const onDragEnd = async (re: DropResult) => {
    if (!re.destination) return
    if (re.destination) {
      if (
        re.source.droppableId === BOARD_COMPLETED &&
        re.destination.droppableId === BOARD_IN_PROGRESS
      ) {
        return toast.error("You can't move a ticket from Completed to In Progress")
      }
      setIsLoading(true)
      try {
        let newBoards = boards
        const sourceIndex = newBoards.findIndex(
          (board) => board.boardStatus === re.source.droppableId
        )
        const destinationIndex = newBoards.findIndex(
          (board) => board.boardStatus === re.destination!.droppableId
        )
        const dragItem = {
          ...newBoards[sourceIndex].tickets[re.source.index],
          status: re.destination.droppableId,
          updatedAt: getCurrentISOString(),
        }
        newBoards[sourceIndex].tickets.splice(re.source.index, 1)
        newBoards[destinationIndex].tickets.splice(re.destination.index, 0, dragItem)
        setBoards(newBoards)
        await TicketService.updateTicketById(dragItem.id, dragItem)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.log(err)
      }
    }
  }

  const onDragUpdate = (re: DragUpdate) => {
    if (!re.destination) return
    if (re.destination) {
      if (
        re.source.droppableId === BOARD_COMPLETED &&
        re.destination.droppableId === BOARD_IN_PROGRESS
      ) {
        setErrDrag(true)
      } else {
        setErrDrag(false)
      }
    }
  }

  return (
    <>
      {/* Board Header */}
      <BoardsHeader onOpen={onOpen} />
      {/* Board Column */}
      <DragDropContext onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
        <div className="relative my-5 grid flex-1 gap-5 lg:grid-cols-3">
          {isLoading && (
            <div className="top-1/2 left-1/2 z-50 hidden lg:absolute lg:block">
              <div className="flex flex-col items-center justify-center">
                <CircleLoading variant="inverted" size="lg" />
                <p>Updating Data ....</p>
              </div>
            </div>
          )}
          {boards.map((board, boardIdx) => (
            <Droppable key={boardIdx} droppableId={board.boardStatus} isDropDisabled={isLoading}>
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div
                    className={classNames(
                      "flex h-fit scroll-m-2 flex-col bg-slate-200 p-4 md:w-auto",
                      {
                        "bg-blue-100": snapshot.isDraggingOver,
                        "bg-red-100 blur-sm": errDrag && snapshot.isDraggingOver,
                        blur: isLoading,
                      }
                    )}
                  >
                    <Board status={board.boardStatus}>
                      {board.tickets.length > 0 &&
                        board.tickets.map((ticket, ticketIdx) => (
                          <Card key={ticket.id} data={ticket} index={ticketIdx} />
                        ))}
                      {provided.placeholder}
                    </Board>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <CreateTicketModal isOpen={isOpen} handleClose={handleClose} />
    </>
  )
}

export default Boards
