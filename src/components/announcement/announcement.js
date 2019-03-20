import React, { Component } from 'react'

class Announcement extends Component {
  render() {

    const { id, description, title, image } = this.props.item;

    return (
      <div className="col-md-4" key={id}>
        <div className="card">
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement