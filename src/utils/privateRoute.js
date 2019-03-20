import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, type, ...rest }) => {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Route { ...rest } render={(props) => (
      user !== null && (user.role === type || type === 'DOCTOR_USER')
        ? <Component  { ...props } />
        : <Redirect to='/login' />
    )} />
  )
}

export default PrivateRoute