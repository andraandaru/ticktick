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
