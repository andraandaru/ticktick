import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { Fragment, useState } from "react"

const statuses = ["Open", "In Progress", "Completed"]

const TicketForm = () => {
  const [selected, setSelected] = useState("Open")

  return (
    <Fragment>
      <label htmlFor="title" className="flex flex-col">
        Title
        <input
          id="title"
          type="text"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
        />
      </label>
      <label htmlFor="description" className="flex flex-col">
        Description
        <textarea
          id="description"
          className="mb-3 w-full rounded-md border-2 border-slate-400 px-3 py-2.5 focus:border-2 focus:border-blue-800 focus:outline-none"
        />
      </label>
      <div className="mx-auto w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label>Status</RadioGroup.Label>
          <div className="space-y-2">
            {statuses.map((status) => (
              <RadioGroup.Option
                key={status}
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
            ))}
          </div>
        </RadioGroup>
      </div>
    </Fragment>
  )
}

export default TicketForm
