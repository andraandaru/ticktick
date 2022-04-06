import { AxiosResponse } from "axios"
import { toast } from "react-toastify"
import { USER_ENDPOINT } from "../constants/api-constants"
import { LoginRequestDataTypes, LoginResponseDataTypes } from "../types"
import { callToAPI } from "../utils/api"

const api = callToAPI()

export const AuthService = {
  login: async (data: LoginRequestDataTypes) => {
    try {
      const response: AxiosResponse<LoginResponseDataTypes> = await api.get(
        `/${USER_ENDPOINT}?email=${data.email}`
      )
      const responseData = response.data
      if (responseData.length === 0) {
        toast.error("User Not Found")
        throw new Error("User Not Found")
      } else {
        const user = responseData[0]
        if (user.password === data.password) {
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
