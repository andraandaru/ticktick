import { BOARD_OPEN } from "../../constants/board-constants"
import TicketFormProvider from "../../providers/TicketFormProvider"
import { TicketDataTypes } from "../../types"
import { getCurrentISOString } from "../../utils/common"
import BaseModal from "./BaseModal"

type CreateTicketModalProps = {
  isOpen: boolean
  handleClose: () => void
}

const initialTicketData: TicketDataTypes = {
  id: "",
  title: "",
  description: "",
  status: BOARD_OPEN,
  createdAt: getCurrentISOString(),
  updatedAt: getCurrentISOString(),
}

const CreateTicketModal = ({ isOpen, handleClose }: CreateTicketModalProps) => {
  return (
    <BaseModal title="Create Ticket" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2">
        <TicketFormProvider
          initialData={initialTicketData as TicketDataTypes}
          type="submit"
          handleCloseModal={handleClose}
        />
      </div>
    </BaseModal>
  )
}

export default CreateTicketModal
