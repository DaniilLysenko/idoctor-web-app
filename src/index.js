import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"

import App from './components/app';
import UserService from './services/userService'
import AnnouncementService from './services/announcementService'
import { AnnouncementServiceProvider } from './components/announcementServiceContext'
import { UserServiceProvider } from './components/userServiceContext'

import store from './store'

import './styles/dashboard.css'

const userService = new UserService();
const announcementService = new AnnouncementService();

ReactDOM.render(
  <Provider store={store}>
    <UserServiceProvider value={userService}>
      <AnnouncementServiceProvider value={announcementService}>
        <Router>
          <App />
        </Router>
      </AnnouncementServiceProvider>
    </UserServiceProvider>
  </Provider>
  , document.getElementById('root')
)