import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"
import { Link } from 'react-router-dom'

class AllPatientItem extends Component {

  state = {
    doctorFound: false
  }

  componentDidMount() {
    const { patient } = this.props
    const currentDoctor = JSON.parse(localStorage.getItem('user'))

    if (patient.doctor !== null && patient.doctor.id === currentDoctor.id) {
      this.setState({
        doctorFound: true
      })
    } else {
      this.setState({
        doctorFound: false
      })
    }
  }

  handleClick = (patient) => {
    const doctorService = new DoctorService()

    doctorService.addPatient(patient.id).then(response => {
      this.setState({
        doctorFound: true
      })

      alert(`Patient ${patient.fullName} is added to your patient list`)
    })
  }

  render() {
    const { patient } = this.props

    let button

    if (this.state.doctorFound) {
        button = <Link to={`/doctor/patients/${patient.id}`} className="btn btn-info">Інформація</Link>
    } else {
        button = <button className="btn btn-success" onClick={() => this.handleClick(patient)}>Додати</button>
    }

    return (
      <tr key={patient.id}>
        <td>{patient.id}</td>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.patronName}</td>
        <td>{patient.email}</td>
        <td>
          {button}
        </td>
      </tr>
    )
  }
}

export default AllPatientItem