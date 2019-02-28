import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"

import App from './components/app';
import UserService from './services/userService'
import { UserServiceProvider } from './components/userServiceContext'

import store from './store'

const userService = new UserService();

ReactDOM.render(
  <Provider store={store}>
    <UserServiceProvider value={userService}>
      <Router>
        <App />
      </Router>
    </UserServiceProvider>
  </Provider>
  , document.getElementById('root')
)