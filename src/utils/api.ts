import axios from "axios"
import { API_BASE_URL, API_ENDPOINT, API_VERSION } from "../constants/api-constants"
import { delay } from "./common"

export const callToAPI = () => {
  const apiBaseUrl = `${API_BASE_URL}/${API_ENDPOINT}/${API_VERSION}`
  const api = axios.create({
    baseURL: apiBaseUrl,
  })

  api.interceptors.response.use(async (response) => {
    await delay()
    return response.data
  })

  return api
}
