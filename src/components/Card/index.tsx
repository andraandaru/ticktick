import { Draggable } from "react-beautiful-dnd"
import { Link } from "react-router-dom"
import { TicketDataTypes } from "../../types"

type CardProps = {
  data: TicketDataTypes
  index: number
}

const Card = ({ data, index }: CardProps) => {
  return (
    <Draggable index={index} draggableId={data.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mr-2 bg-white p-2"
        >
          <h3 className="text-lg font-bold">{data.title}</h3>
          <div className="flex flex-col items-start space-y-2">
            <p className="text-sm">{new Date(data.updatedAt).toLocaleString()}</p>
            <Link to={`/ticket/${data.id}`} state={data}>
              <button className="flex items-center justify-around rounded-md bg-blue-700 p-2 text-sm font-semibold text-slate-200">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card
