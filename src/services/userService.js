import config from '../config'
import axios from 'axios'

export default class UserService {
  async login(email, password) {
    return await axios.post(`${config.serverUrl}/login`, {
      email,
      password
    })
  }
}