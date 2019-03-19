import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/loginForm'

import './loginPage.css';

class LoginPage extends Component {
  render() {

    if (localStorage.getItem('user')) {
      return <Redirect to="/"/>
    }

    return (
      <div className="wrapper">
        <div className="container text-center">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage