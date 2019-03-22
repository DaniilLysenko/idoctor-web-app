import axios from "axios"
import config from "../config"

export default class HospitalService {
  async hospitals() {
    return await axios.get(`${config.backendUrl}/hospitals`)
  }
}