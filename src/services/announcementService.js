import config from '../config'
import axios from "axios"

export default class AnnouncementService {
  async getAnnouncements() {
    return await axios.get(`${config.backendUrl}/announcements`)
  }
}