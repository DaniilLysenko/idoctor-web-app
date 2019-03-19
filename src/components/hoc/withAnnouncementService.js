import React from 'react'
import { AnnouncementServiceConsumer } from "../announcementServiceContext"

const withAnnouncementService = () => (Wrapped) => {
  return (props) => {
    return (
      <AnnouncementServiceConsumer>
        {
          (announcementService) => {
            return (<Wrapped {...props} announcementService={announcementService} />)
          }
        }
      </AnnouncementServiceConsumer>
    )
  }
}

export default withAnnouncementService