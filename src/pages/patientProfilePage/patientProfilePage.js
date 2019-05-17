import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"
import {Link} from "react-router-dom"

class PatientProfilePage extends Component {

  state = {
    patient: {}
  }

  componentDidMount() {
    const doctorService = new DoctorService()

    const { id } = this.props.match.params

    doctorService.getSinglePatient(id).then(response => {
      this.setState({
        patient: response.data.patient
      })
    })
  }

  render() {

    const { patient } = this.state

    return (
      <div className="patient-container">
        <div className="patient-info">
          <div className="info-block">
            <h3>Ім'я</h3>
            <p>{`${patient.lastName} ${patient.firstName} ${patient.patronName}`}</p>
          </div>
          <div className="info-block">
            <h3>Лікарня</h3>
            <p>Перша міська лікарня</p>
          </div>
          <div className="info-block">
            <h3>Адреса проживання</h3>
            <p>Черкаси, бул. Шевченка 145, кв. 234</p>
          </div>
        </div>
        <Link to={`/doctor/patient-medical-card/${patient.id}`} className="btn btn-success">Медична карта</Link>
      </div>
    )
  }
}

export default PatientProfilePage