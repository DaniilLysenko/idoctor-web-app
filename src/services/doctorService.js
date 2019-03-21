import config from '../config'
import axios from 'axios'

export default class DoctorService {
  async login(email, password) {
    return await axios.post(`${config.backendUrl}/doctor/login`, {
      email,
      password
    })
  }

  async addPatient(userInfo) {
    return await axios.post(`${config.backendUrl}/doctor/add-patient`, userInfo)
  }
}