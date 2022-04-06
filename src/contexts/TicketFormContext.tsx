import { createContext } from "react"
import { TicketDataTypes } from "../types"

type TicketFormContextTypes = {
  ticket: TicketDataTypes
  type: string
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeDesc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onChangeStatus: (value: string) => void
  onSubmit: () => void
  onClose: () => void
  isLoading: boolean
  formErr: {
    title: boolean
    description: boolean
  }
}

export const TicketFormContext = createContext<TicketFormContextTypes>({
  ticket: {} as TicketDataTypes,
  type: "",
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => {},
  onChangeDesc: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  onChangeStatus: (value: string) => {},
  onSubmit: () => {},
  onClose: () => {},
  isLoading: false,
  formErr: {
    title: false,
    description: false,
  },
})
