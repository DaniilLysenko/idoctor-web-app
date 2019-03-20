import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/loginForm'

import UserService from '../../services/userService'

import './loginPage.css';

class LoginPage extends Component {
  render() {

    const userService = new UserService()

    if (localStorage.getItem('user')) {
      return <Redirect to="/"/>
    }

    return (
      <div className="wrapper">
        <div className="container text-center">
          <LoginForm service={userService} type="user"/>
        </div>
      </div>
    )
  }
}

export default LoginPage