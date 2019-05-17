import React, {Component} from 'react'
import MedicalCard from "../../components/medicalCard"

class PatientMedicalCardPage extends Component {
  render() {

    const { id } = this.props.match.params

    return <MedicalCard patientId={id} />
  }
}

export default PatientMedicalCardPage