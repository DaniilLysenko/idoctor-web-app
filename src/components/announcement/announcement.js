import React, { Component } from 'react'

class Announcement extends Component {

  formatDate({date}) {
    date = new Date(date)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  }

  render() {

    const { id, description, title, image, date } = this.props.item;

    return (
      <div className="col-md-4" key={id}>
        <div className="card">
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <p className="card-text text-right"><i className="far fa-clock"/> {this.formatDate(date)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement