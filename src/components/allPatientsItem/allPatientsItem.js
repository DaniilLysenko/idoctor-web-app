import React from 'react'

const AllPatientItem = ({patient}) => {
  return (
    <tr key={patient.id}>
      <td>{patient.id}</td>
      <td>{patient.firstName}</td>
      <td>{patient.lastName}</td>
      <td>{patient.patronName}</td>
      <td>{patient.email}</td>
    </tr>
  )
}

export default AllPatientItem