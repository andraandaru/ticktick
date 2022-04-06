import { TICKET_ENDPOINT } from "../constants/api-constants"
import { BOARD_COMPLETED, BOARD_IN_PROGRESS, BOARD_OPEN } from "../constants/board-constants"
import { BoardDataTypes, CreateTicketRequestDataTypes, TicketDataTypes } from "../types"
import { callToAPI } from "../utils/api"

const api = callToAPI()

export const TicketService = {
  getTickets: async () => {
    try {
      const response: TicketDataTypes[] = await api.get(`/${TICKET_ENDPOINT}/`)
      const transpilledData: BoardDataTypes[] = [
        {
          boardStatus: BOARD_OPEN,
          tickets: response.filter((ticket) => ticket.status === BOARD_OPEN),
        },
        {
          boardStatus: BOARD_IN_PROGRESS,
          tickets: response.filter((ticket) => ticket.status === BOARD_IN_PROGRESS),
        },
        {
          boardStatus: BOARD_COMPLETED,
          tickets: response.filter((ticket) => ticket.status === BOARD_COMPLETED),
        },
      ]
      return transpilledData
    } catch (err) {
      throw err
    }
  },
  getTicketById: async (id: string) => {
    try {
      const response: TicketDataTypes = await api.get(`/${TICKET_ENDPOINT}/${id}`)
      return response
    } catch (err) {
      throw err
    }
  },
  updateTicketById: async (id: string, data: TicketDataTypes) => {
    try {
      const response: TicketDataTypes = await api.put(`/${TICKET_ENDPOINT}/${id}`, data)
      return response
    } catch (err) {
      throw err
    }
  },
  createTicket: async (data: CreateTicketRequestDataTypes) => {
    try {
      const response: TicketDataTypes = await api.post(`/${TICKET_ENDPOINT}/`, data)
      return response
    } catch (err) {
      throw err
    }
  },
}
