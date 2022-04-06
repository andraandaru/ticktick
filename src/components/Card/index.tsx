import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="mr-2 bg-white p-2">
      <h3 className="text-lg font-bold">Ticket #1</h3>
      <div className="flex flex-col items-start space-y-2">
        <p className="text-sm">Created At 6 April 2022</p>
        <Link to="/ticket/1">
          <button className="flex items-center justify-around rounded-md bg-blue-700 p-2 text-sm font-semibold text-slate-200">
            View Detail
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card
