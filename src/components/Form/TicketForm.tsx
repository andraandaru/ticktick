import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { Fragment, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TicketFormContext } from "../../contexts/ticketForm"
import { TicketService } from "../../services/TicketService"
import { TicketDataTypes } from "../../types"
import { getCurrentISOString } from "../../utils/common"
import CircleLoading from "../Feedback/CircleLoading"

const statuses: string[] = ["Open", "In Progress", "Completed"]

export const TicketForm = ({
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
        const requestData = {
          title: ticket.title,
          description: ticket.description,
          status: ticket.status,
          updatedAt: getCurrentISOString(),
        }
        await TicketService.createTicket(requestData)
        setIsLoading(false)
        handleCloseModal && handleCloseModal()
      } else if (type === "update") {
        const updatedTicket = {
          ...ticket,
          updatedAt: getCurrentISOString(),
        }
        await TicketService.updateTicketById(ticket.id, updatedTicket)
        setIsLoading(false)
        navigate("/")
      }
    } catch (err) {
      setIsLoading(false)
      throw err
    }
  }

  const onClose = () => {
    if (type === "submit") {
      handleCloseModal && handleCloseModal()
    } else if (type === "update") {
      navigate(-1)
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
      }}
    >
      <TicketFormComponent />
    </TicketFormContext.Provider>
  )
}

const TicketFormComponent = () => {
  const ticketFormContext = useContext(TicketFormContext)
  const {
    ticket,
    type,
    onSubmit,
    onChangeTitle,
    onChangeDesc,
    onChangeStatus,
    onClose,
    isLoading,
  } = ticketFormContext
  const [lastTicketStatus] = useState(ticket.status)

  const secondaryBtn =
    "mt-2 w-48 rounded-md border border-transparent bg-pink-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-pink-800 focus:outline-none focus:ring-1 focus:ring-pink-900 focus:ring-offset-2"

  const primaryBtn =
    "mt-2 w-48 flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium capitalize text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2"

  return (
    <Fragment>
      <label htmlFor="title" className="flex flex-col">
        Title
        <input
          id="title"
          type="text"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
          onChange={onChangeTitle}
          value={ticket.title}
        />
      </label>
      <label htmlFor="description" className="flex flex-col">
        Description
        <textarea
          id="desc"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
          onChange={onChangeDesc}
          value={ticket.description}
        />
      </label>
      <div className="mx-auto w-full">
        <RadioGroup value={ticket?.status} onChange={onChangeStatus}>
          <RadioGroup.Label>Status</RadioGroup.Label>
          <div className="space-y-2">
            {statuses.map((status) => (
              <Fragment key={status}>
                {status === "In Progress" && lastTicketStatus === "Completed" ? null : (
                  <RadioGroup.Option
                    value={status}
                    className={({ active, checked }) =>
                      classNames(
                        "relative flex cursor-pointer rounded-lg border-2 border-slate-400 bg-white px-5 py-4 shadow-md focus:outline-none",
                        {
                          "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300":
                            active,
                          "bg-blue-800 text-white": checked,
                        }
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={classNames("font-medium", {
                                  "text-white": checked,
                                })}
                              >
                                {status}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          {checked && (
                            <div className="flex-shrink-0 text-white">
                              <CheckIcon className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                )}
              </Fragment>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button className={secondaryBtn} onClick={onClose}>
          Cancel
        </button>
        <button
          className={classNames(primaryBtn, {
            "cursor-not-allowed opacity-50": isLoading,
          })}
          onClick={onSubmit}
        >
          {isLoading && <CircleLoading />}
          {isLoading ? "Please Wait ..." : type}
        </button>
      </div>
    </Fragment>
  )
}

export default TicketForm
