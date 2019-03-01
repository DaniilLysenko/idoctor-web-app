import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../utils'

import Header from '../header'
import Sidebar from '../sidebar'
import LoginPage from '../../pages/loginPage'
import DashboardPage from '../../pages/dashboardPage'

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
              <Switch>
                <PrivateRoute path='/' exact component={DashboardPage} type="ROLE_USER" />
                <Route render={() => <h2>Сторінка не знайдена :(</h2>} />
              </Switch>
            </main>
          </div>
        </div>
      </Fragment>
    </Switch>
  )
}

export default App