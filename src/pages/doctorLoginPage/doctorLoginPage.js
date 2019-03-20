import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/loginForm'

import DoctorService from '../../services/doctorService'

import './doctorLoginPage.css';

class DoctorLoginPage extends Component {
  render() {

    const doctorService = new DoctorService()

    if (localStorage.getItem('user')) {
      return <Redirect to="/"/>
    }

    return (
      <div className="wrapper">
        <div className="container text-center">
          <LoginForm service={doctorService} type="doctor"/>
        </div>
      </div>
    )
  }
}

export default DoctorLoginPage