import { AxiosResponse } from "axios"
import { TICKET_ENDPOINT } from "../constants/api-constants"
import { CreateTicketRequestDataTypes, TicketDataTypes } from "../types"
import { callToAPI } from "../utils/api"

const api = callToAPI()

export const TicketService = {
  getTickets: async () => {
    try {
      const response: AxiosResponse<TicketDataTypes[]> = await api.get(`/${TICKET_ENDPOINT}/`)
      const responseData = response.data
      const transpilledData = [
        {
          boardStatus: "Open",
          tickets: responseData.filter((ticket) => ticket.status === "Open"),
        },
        {
          boardStatus: "In Progress",
          tickets: responseData.filter((ticket) => ticket.status === "In Progress"),
        },
        {
          boardStatus: "Completed",
          tickets: responseData.filter((ticket) => ticket.status === "Completed"),
        },
      ]
      return transpilledData
    } catch (err) {
      throw err
    }
  },
  getTicketById: async (id: string) => {
    try {
      const response: AxiosResponse<TicketDataTypes> = await api.get(`/${TICKET_ENDPOINT}/${id}`)
      const responseData = response.data
      return responseData
    } catch (err) {
      throw err
    }
  },
  updateTicketById: async (id: string, data: TicketDataTypes) => {
    try {
      const response: AxiosResponse<TicketDataTypes> = await api.put(
        `/${TICKET_ENDPOINT}/${id}`,
        data
      )
      const responseData = response.data
      return responseData
    } catch (err) {
      throw err
    }
  },
  createTicket: async (data: CreateTicketRequestDataTypes) => {
    try {
      const response: AxiosResponse<TicketDataTypes> = await api.post(`/${TICKET_ENDPOINT}/`, data)
      const responseData = response.data
      return responseData
    } catch (err) {
      throw err
    }
  },
}
