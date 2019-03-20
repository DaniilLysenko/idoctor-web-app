import React from 'react'

import UserSidebar from './userSidebar'
import DoctorSidebar from './doctorSidebar'

import './sidebar.css'

const Sidebar = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  if (user !== null && user.role === 'ROLE_USER') {
    return <UserSidebar/>
  } else if (user !== null && user.role === 'ROLE_DOCTOR') {
    return <DoctorSidebar/>
  } else if (user === null || (user.role !== 'ROLE_DOCTOR' && user.role !== 'ROLE_USER')) {
    return <div/>
  }
}

export default Sidebar