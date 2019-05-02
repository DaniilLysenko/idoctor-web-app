import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('user')
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to='/' className="navbar-brand col-sm-3 col-md-2 mr-0">
          <i className="fas fa-user-md"/> iDoctor
        </Link>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn nav-link" onClick={this.logout}>Sign out</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)