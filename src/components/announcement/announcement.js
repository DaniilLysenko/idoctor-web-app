import React, { Component } from 'react'

class Announcement extends Component {
  render() {

    const styles = {width: '18rem'}

    return (
      <div className="card" style={styles}>
        <img className="card-img-top" src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
          </div>
      </div>
    )
  }
}

export default Announcement