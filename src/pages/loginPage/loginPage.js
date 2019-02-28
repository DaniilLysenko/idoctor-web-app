import React, { Component } from 'react'

import LoginForm from '../../components/loginForm'

import './loginPage.css';

class LoginPage extends Component {
  render() {
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