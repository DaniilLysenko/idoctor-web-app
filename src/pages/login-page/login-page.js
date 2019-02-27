import React, { Component } from 'react'

import LoginForm from '../../components/login-form'

import './login-page.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="container text-center">
        <LoginForm />
      </div>
    )
  }
}

export default LoginPage