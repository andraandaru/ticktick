import axios from "axios"
import { API_BASE_URL, API_ENDPOINT, API_VERSION } from "../constants/api-constants"

export const callToAPI = () => {
  const apiBaseUrl = `${API_BASE_URL}/${API_ENDPOINT}/${API_VERSION}`
  const api = axios.create({
    baseURL: apiBaseUrl,
  })
  return api
}
