import { ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon } from "@heroicons/react/outline"
import { FC } from "react"

interface BoardProps {
  status: string
}

const Board: FC<BoardProps> = ({ status, children }) => {
  return (
    <div>
      <div className="flex h-fit scroll-m-2 flex-col bg-slate-200 p-4 md:w-auto">
        <div>
          <h3 className="flex items-center text-lg font-semibold">
            <span>
              {status === "Open" && <ClipboardIcon className="mr-2 h-5 w-5" />}
              {status === "In Progress" && <ClipboardListIcon className="mr-2 h-5 w-5" />}
              {status === "Completed" && <ClipboardCheckIcon className="mr-2 h-5 w-5" />}
            </span>
            {status}
          </h3>
        </div>
        <div className="mt-4 space-y-4 overflow-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Board
