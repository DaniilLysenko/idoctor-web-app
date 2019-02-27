import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from '../header'
import Sidebar from '../sidebar'
import LoginPage from '../../pages/login-page'
import DashboardPage from '../../pages/dashboard-page'

const App = () => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage}/>
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Route path='/' component={DashboardPage}/>
            </main>
          </div>
        </div>
      </Fragment>
    </Switch>
  )
}

export default App