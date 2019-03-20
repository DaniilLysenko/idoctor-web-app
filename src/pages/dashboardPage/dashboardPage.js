import React, { Component } from 'react'

import AnnouncementList from '../../components/announcementList'

import { withAnnouncementService } from '../../components/hoc'

class DashboardPage extends Component {

  state = {
    itemList: []
  }

  componentDidMount() {
    const { announcementService } = this.props

    announcementService.getAnnouncements()
      .then(response => {
        this.setState({
          itemList: response.data.announcements
        })
      })
  }

  render() {

    const { itemList } = this.state

    return (
      <div className="container">
        <AnnouncementList items={itemList} />
      </div>
    )
  }
}

export default withAnnouncementService()(DashboardPage)