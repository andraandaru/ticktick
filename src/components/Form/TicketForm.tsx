import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { Fragment, useContext, useState } from "react"
import { commonInputClasses, primaryBtnClasses, secondaryBtnClasses } from "../../classes/common"
import { BOARD_COMPLETED, BOARD_IN_PROGRESS, BOARD_OPEN } from "../../constants/board-constants"
import { TicketFormContext } from "../../contexts/TicketFormContext"
import CircleLoading from "../Feedback/CircleLoading"

const statuses: string[] = [BOARD_OPEN, BOARD_IN_PROGRESS, BOARD_COMPLETED]

const TicketForm = () => {
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
    formErr,
  } = ticketFormContext
  const [lastTicketStatus] = useState(ticket.status)

  return (
    <Fragment>
      <label htmlFor="title" className="flex flex-col">
        <div className="flex">
          Title <span className="ml-1 text-pink-700">*</span>
        </div>
        <input
          id="title"
          type="text"
          className={classNames(commonInputClasses, {
            "cursor-not-allowed opacity-50": isLoading,
            "border-pink-600": formErr.title,
          })}
          disabled={isLoading}
          onChange={onChangeTitle}
          value={ticket.title}
        />
      </label>

      <label htmlFor="description" className="flex flex-col">
        <div className="flex">
          Description <span className="ml-1 text-pink-700">*</span>
        </div>
        <textarea
          id="desc"
          className={classNames(commonInputClasses, {
            "cursor-not-allowed opacity-50": isLoading,
            "border-pink-600": formErr.description,
          })}
          disabled={isLoading}
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
                {status === BOARD_IN_PROGRESS && lastTicketStatus === BOARD_COMPLETED ? null : (
                  <RadioGroup.Option
                    value={status}
                    className={({ active, checked }) =>
                      classNames(
                        "relative flex cursor-pointer rounded-lg border-2 border-slate-400 bg-white px-5 py-4 shadow-md focus:outline-none",
                        {
                          "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300":
                            active,
                          "bg-blue-800 text-white": checked,
                          "cursor-not-allowed opacity-50": isLoading,
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
        <button
          className={classNames(secondaryBtnClasses, {
            "cursor-not-allowed opacity-50": isLoading,
          })}
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          className={classNames(primaryBtnClasses, {
            "cursor-not-allowed opacity-50": isLoading,
          })}
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading && <CircleLoading />}
          {isLoading ? "Please Wait ..." : type}
        </button>
      </div>
    </Fragment>
  )
}

export default TicketForm
