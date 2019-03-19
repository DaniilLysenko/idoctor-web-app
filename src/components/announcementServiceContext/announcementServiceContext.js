import React from 'react'

const {
  Provider: AnnouncementServiceProvider,
  Consumer: AnnouncementServiceConsumer
} = React.createContext()

export {
  AnnouncementServiceProvider,
  AnnouncementServiceConsumer
}