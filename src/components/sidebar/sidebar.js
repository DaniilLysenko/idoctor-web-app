import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              <i className="far fa-envelope" /> Оголошення
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/appointments">
              <i className="far fa-edit" /> Записи
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="far fa-address-card"/> Мед. карта
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Профіль</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fas fa-cog"/> Налаштування
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar