import { ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon } from "@heroicons/react/outline"
import { FC } from "react"
import { BOARD_COMPLETED, BOARD_IN_PROGRESS, BOARD_OPEN } from "../../constants/board-constants"

interface BoardProps {
  status: string
}

const Board: FC<BoardProps> = ({ status, children }) => {
  return (
    <>
      <div>
        <h3 className="flex items-center text-lg font-semibold">
          <span>
            {status === BOARD_OPEN && <ClipboardIcon className="mr-2 h-5 w-5" />}
            {status === BOARD_IN_PROGRESS && <ClipboardListIcon className="mr-2 h-5 w-5" />}
            {status === BOARD_COMPLETED && <ClipboardCheckIcon className="mr-2 h-5 w-5" />}
          </span>
          {status}
        </h3>
      </div>
      <div className="mt-4 space-y-4 overflow-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
        {children}
      </div>
    </>
  )
}

export default Board
