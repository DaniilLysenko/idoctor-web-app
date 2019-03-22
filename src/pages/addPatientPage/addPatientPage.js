import React from 'react'

import AddPatientForm from '../../components/addPatientForm'
import HospitalService from "../../services/hospitalService"

const AddPatientPage = () => {
  const hospitalService = new HospitalService()

  const hospitals = hospitalService.hospitals()
    .then(response => console.log(response))

  return <AddPatientForm/>
}

export default AddPatientPage