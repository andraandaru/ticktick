import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import TicketForm from "../components/Form/TicketForm"
import { TicketFormContext } from "../contexts/TicketFormContext"
import { TicketService } from "../services/TicketService"
import { TicketDataTypes } from "../types"
import { getCurrentISOString } from "../utils/common"

export const TicketFormProvider = ({
  initialData,
  type,
  handleCloseModal,
}: {
  initialData: TicketDataTypes
  type: string
  handleCloseModal?: () => void
}) => {
  const [ticket, setTicket] = useState<TicketDataTypes>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [formErr, setFormErr] = useState({
    title: false,
    description: false,
  })
  const navigate = useNavigate()

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTicket((prevState) => ({ ...prevState, title: value }))
  }

  const onChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setTicket((prevState) => ({ ...prevState, description: value }))
  }

  const onChangeStatus = (value: string) => {
    setTicket((prevState) => ({
      ...prevState,
      status: value,
    }))
  }

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      if (type === "submit") {
        if (ticket.title === "" || ticket.description === "") {
          toast.error("Please fill all fields")
          setIsLoading(false)
          setFormErr({
            title: ticket.title === "",
            description: ticket.description === "",
          })
          return
        }

        const requestData = {
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
          updatedAt: getCurrentISOString(),
        }

        await TicketService.createTicket(requestData)
        handleCloseModal && handleCloseModal()
      } else if (type === "update") {
        if (ticket.title === "" || ticket.description === "") {
          toast.error("Please fill all fields")
          setIsLoading(false)
          setFormErr({
            title: ticket.title === "",
            description: ticket.description === "",
          })
          return
        }

        const updatedTicket = {
          ...ticket,
          updatedAt: getCurrentISOString(),
        }

        await TicketService.updateTicketById(ticket.id, updatedTicket)
        navigate("/")
      }
    } catch (err) {
      setIsLoading(false)
      throw err
    }

    setIsLoading(false)
    setFormErr({
      title: false,
      description: false,
    })
  }

  const onClose = () => {
    if (type === "submit") {
      handleCloseModal && handleCloseModal()
    } else if (type === "update") {
      navigate("/")
    }
  }

  return (
    <TicketFormContext.Provider
      value={{
        ticket,
        type,
        onChangeTitle,
        onChangeDesc,
        onChangeStatus,
        onSubmit,
        onClose,
        isLoading,
        formErr,
      }}
    >
      <TicketForm />
    </TicketFormContext.Provider>
  )
}

export default TicketFormProvider
