export type LoginRequestDataTypes = {
  email: string
  password: string
}

export type UserDataTypes = {
  id: string
  email: string
  password: string
}

export type LoginResponseDataTypes = UserDataTypes[] | []

export type TicketDataTypes = {
  id: string
  title: string
  description: string
  status: string
  createdAt: string
  updatedAt: string
}

export type CreateTicketRequestDataTypes = {
  title: string
  description: string
  status: string
  updatedAt: string
}

export type BoardDataTypes = {
  boardStatus: string
  tickets: TicketDataTypes[]
}
