import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app';
import UserService from './services/user-service'
import { UserServiceProvider } from './components/user-service-context'

import store from './store'

const userService = new UserService();

ReactDOM.render(
  <Provider store={store}>
    <UserServiceProvider value={userService}>
      <App />
    </UserServiceProvider>
  </Provider>
  , document.getElementById('root')
)