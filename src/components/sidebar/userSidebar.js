import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'

const UserSidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/announcements">
              <i className="far fa-envelope" /> Оголошення
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/appointments">
              <i className="far fa-edit" /> Записи
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/medical-card">
              <i className="far fa-address-card"/> Мед. карта
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feedback">
              <i className="far fa-address-card"/> Відгуки
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UserSidebar