import React from "react"
import TicketForm from "../Form/TicketForm"
import BaseModal from "./BaseModal"

type CreateTicketModalProps = {
  isOpen: boolean
  handleClose: () => void
}

const CreateTicketModal = ({ isOpen, handleClose }: CreateTicketModalProps) => {
  return (
    <BaseModal title="Add a New Ticket" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2">
        <TicketForm />
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="mt-2 w-32 rounded-md border border-transparent bg-pink-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-pink-800 focus:outline-none focus:ring-1 focus:ring-pink-900 focus:ring-offset-2"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button className="mt-2 w-32 rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </BaseModal>
  )
}

export default CreateTicketModal
