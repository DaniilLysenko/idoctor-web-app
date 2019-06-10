import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../utils'

import Header from '../header'
import Sidebar from '../sidebar'
import LoginPage from '../../pages/loginPage'
import DoctorLoginPage from '../../pages/doctorLoginPage'
import DashboardPage from '../../pages/dashboardPage'
import AddPatientPage from '../../pages/addPatientPage'
import PatientListPage from '../../pages/patientListPage'
import PatientProfilePage from '../../pages/patientProfilePage'
import PatientMedicalCardPage from "../../pages/patientMedicalCardPage"
import AddMedicalCardRecordPage from "../../pages/addMedicalCardRecordPage"
import AddMedicalCardAnalyzePage from "../../pages/addMedicalCardAnalyzePage"
import FeedbackPage from "../../pages/feedbackPage/feedbackPage"

const App = () => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage}/>
      <Route path='/doctor/login' component={DoctorLoginPage}/>
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                {/*Doctor User Routes*/}
                <PrivateRoute path='/' exact component={DashboardPage} type="DOCTOR_USER" />
                <PrivateRoute path='/announcements' component={DashboardPage} type="DOCTOR_USER" />

                <PrivateRoute path='/feedback' component={FeedbackPage} type="ROLE_USER" />

                {/*Doctor User*/}
                <PrivateRoute path='/doctor/add-patient' component={AddPatientPage} type="ROLE_DOCTOR" />
                <PrivateRoute path='/doctor/all-patients' component={PatientListPage} type="ROLE_DOCTOR" />

                <PrivateRoute path='/doctor/patients/:id' component={PatientProfilePage} type="ROLE_DOCTOR" />

                <PrivateRoute path='/doctor/patient-medical-card/add-record/:id' component={AddMedicalCardRecordPage} type="ROLE_DOCTOR" />
                <PrivateRoute path='/doctor/patient-medical-card/add-analyze/:id' component={AddMedicalCardAnalyzePage} type="ROLE_DOCTOR" />
                <PrivateRoute path='/doctor/patient-medical-card/:id' component={PatientMedicalCardPage} type="ROLE_DOCTOR" />

                {/*Not Found*/}
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