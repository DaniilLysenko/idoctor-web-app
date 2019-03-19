import React, { Component, Fragment } from 'react'
import Announcement from '../announcement'

class AnnouncementList extends Component {
  render() {
    const { items } = this.props

    const announcements = items.map(item => {
      return <Announcement item={item}/>
    })

    return (
      <Fragment>
        { announcements }
      </Fragment>
    )
  }
}

export default AnnouncementList