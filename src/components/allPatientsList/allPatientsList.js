import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"
import AllPatientsItem from '../allPatientsItem'

class AllPatientsList extends Component {
  state = {
    patients: []
  }

  componentDidMount() {
    const doctorService = new DoctorService()

    doctorService.getAllPatients().then(response => {
      this.setState({
        patients: response.data.patients
      })
    })
  }

  handleChange = (event) => {
    const doctorService = new DoctorService()

    doctorService.searchAllPatients(event.target.value).then(response => {
      this.setState({
        patients: response.data.patients
      })
    })
  }

  render() {

    const { patients } = this.state

    console.log(patients)

    const patientsRender = patients.map(patient => {
      return <AllPatientsItem patient={patient}/>
    })

    return (
      <div className="allPatients">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Знайти паціента" onChange={this.handleChange}/>
          </div>
        </form>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ім'я</th>
            <th scope="col">Прізвище</th>
            <th scope="col">По-батькові</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          {patientsRender}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AllPatientsList