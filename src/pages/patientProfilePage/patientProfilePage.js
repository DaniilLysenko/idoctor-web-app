import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"

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
    return (
      <div className="patient-container">
        <div className="patient-info"></div>
        <button className="btn btn-success">Медична карта</button>
      </div>
    )
  }
}

export default PatientProfilePage