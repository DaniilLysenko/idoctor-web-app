import config from '../config'
import axios from 'axios'

export default class DoctorService {
  async login(email, password) {
    return await axios.post(`${config.serverUrl}/doctor/login`, {
      email,
      password
    })
  }

  async savePatient(userInfo) {
    const doctor = JSON.parse(localStorage.getItem('user'))

    return await axios.post(`${config.apiUrl}/doctor/save-patient`, userInfo, {
      headers: {
        'AUTH-KEY': doctor.apiKey
      }
    })
  }

  async getAllPatients() {
    const doctor = JSON.parse(localStorage.getItem('user'))

    return await axios.get(`${config.apiUrl}/doctor/all-patients/1`, {
      headers: {
        'AUTH-KEY': doctor.apiKey
      }
    });
  }

  async searchAllPatients(query) {
    const doctor = JSON.parse(localStorage.getItem('user'))

    return await axios.get(`${config.apiUrl}/doctor/search-patients`, {
      headers: {
        'AUTH-KEY': doctor.apiKey
      },
      params: {
        query
      }
    });
  }

  async addPatient(patientId) {
    const doctor = JSON.parse(localStorage.getItem('user'))

    return await axios.post(`${config.apiUrl}/doctor/add-patient/${patientId}`, {}, {
      headers: {
        'AUTH-KEY': doctor.apiKey
      }
    });
  }
}