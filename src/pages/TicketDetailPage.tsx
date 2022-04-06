import { RadioGroup } from "@headlessui/react"
import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { useState } from "react"
import TicketForm from "../components/Form/TicketForm"
import withAuth from "../components/HOC/withAuth"
import BaseLayout from "../components/Layouts/BaseLayout"

const statuses = ["Open", "In Progress", "Completed"]

const TicketDetailPage = () => {
  const [selected, setSelected] = useState("Open")

  return (
    <BaseLayout>
      <div className="container mx-auto my-4 flex max-w-3xl flex-1 flex-col justify-center p-3">
        <div className="flex items-center">
          <ClipboardIcon className="mr-4 h-6 w-6" />
          <h3 className="text-2xl font-bold">Ticket Detail</h3>
        </div>
        <TicketForm />
        <div className="mt-4 flex justify-end space-x-2">
          <button className="mt-2 w-32 rounded-md border border-transparent bg-pink-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-pink-800 focus:outline-none focus:ring-1 focus:ring-pink-900 focus:ring-offset-2">
            Cancel
          </button>
          <button className="mt-2 w-32 rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2">
            Update
          </button>
        </div>
      </div>
    </BaseLayout>
  )
}

export default withAuth(TicketDetailPage)
