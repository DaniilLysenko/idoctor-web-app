import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"

class DoctorPatientInfoPage extends Component {

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
        <div>Тут має бути сторінка паціента для доктора, щоб він міг редачить,
          а также кнопочка створити карту, якшо її нема, якшо є, то перейти на карту</div>
        <button>Медична карта</button>
      </div>
    )
  }
}

export default DoctorPatientInfoPage