import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Link to='/' className="navbar-brand col-sm-3 col-md-2 mr-0">
          <i className="fas fa-user-md"/> iDoctor
      </Link>

      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link className="nav-link" to="#">Sign out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header