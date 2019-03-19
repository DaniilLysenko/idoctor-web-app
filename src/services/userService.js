import config from '../config'
import axios from 'axios'

export default class UserService {
  async login() {
    return await axios.post(`${config.backendUrl}/login`, {
      email: 'den@gmail.com',
      password: 'qwerty'
    });
  }
}