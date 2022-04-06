import { ClipboardIcon } from "@heroicons/react/outline"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TicketForm from "../components/Form/TicketForm"
import withAuth from "../components/HOC/withAuth"
import BaseLayout from "../components/Layouts/BaseLayout"
import { TicketService } from "../services/TicketService"
import { TicketDataTypes } from "../types"

const TicketDetailPage = () => {
  const { ticketId } = useParams()

  const [ticket, setTicket] = useState<TicketDataTypes>()

  const getTicketById = useCallback(
    async (ticketId) => {
      const ticket = await TicketService.getTicketById(ticketId)
      setTicket(ticket)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ticket]
  )

  useEffect(() => {
    getTicketById(ticketId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BaseLayout>
      <div className="container mx-auto my-4 flex max-w-3xl flex-1 flex-col justify-center p-3">
        {ticket && (
          <>
            <div className="flex items-center">
              <ClipboardIcon className="mr-4 h-6 w-6" />
              <h3 className="text-2xl font-bold">Ticket Detail</h3>
            </div>
            <TicketForm initialData={ticket} type="update" />
          </>
        )}
      </div>
    </BaseLayout>
  )
}

export default withAuth(TicketDetailPage)
