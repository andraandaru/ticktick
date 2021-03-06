import bcrypt from "bcryptjs"
import { toast } from "react-toastify"
import { USER_ENDPOINT } from "../constants/api-constants"
import { LoginRequestDataTypes, LoginResponseDataTypes } from "../types"
import { callToAPI } from "../utils/api"

const api = callToAPI()

export const AuthService = {
  login: async (data: LoginRequestDataTypes) => {
    try {
      const response: LoginResponseDataTypes = await api.get(
        `/${USER_ENDPOINT}?email=${data.email}`
      )
      if (response.length === 0) {
        toast.error("User Not Found")
        throw new Error("User Not Found")
      } else {
        const user = response[0]
        const comparedPassword = bcrypt.compareSync(data.password, user.password)
        if (comparedPassword) {
          return user
        } else {
          toast.error("Wrong Password!")
          throw new Error("Wrong Password!")
        }
      }
    } catch (err) {
      throw err
    }
  },
}
