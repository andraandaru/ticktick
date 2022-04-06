import { TicketDataTypes } from "../../types"
import { getCurrentISOString } from "../../utils/common"
import TicketForm from "../Form/TicketForm"
import BaseModal from "./BaseModal"

type CreateTicketModalProps = {
  isOpen: boolean
  handleClose: () => void
}

const initialTicketData: TicketDataTypes = {
  id: "",
  title: "",
  description: "",
  status: "Open",
  createdAt: getCurrentISOString(),
  updatedAt: getCurrentISOString(),
}

const CreateTicketModal = ({ isOpen, handleClose }: CreateTicketModalProps) => {
  return (
    <BaseModal title="Add a New Ticket" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2">
        <TicketForm
          initialData={initialTicketData as TicketDataTypes}
          type="submit"
          handleCloseModal={handleClose}
        />
      </div>
    </BaseModal>
  )
}

export default CreateTicketModal
