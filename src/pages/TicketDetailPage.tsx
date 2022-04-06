import { RadioGroup } from "@headlessui/react"
import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { useState } from "react"
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
        <form className="mt-4">
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
                          "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300":
                            active,
                          "bg-sky-900 bg-opacity-75 text-white": checked,
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
          <div className="mt-4 flex justify-end space-x-2">
            <button className="mt-2 w-32 rounded-md border border-transparent bg-pink-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-pink-800 focus:outline-none focus:ring-1 focus:ring-pink-900 focus:ring-offset-2">
              Cancel
            </button>
            <button className="mt-2 w-32 rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:ring-offset-2">
              Update
            </button>
          </div>
        </form>
      </div>
    </BaseLayout>
  )
}

export default TicketDetailPage
