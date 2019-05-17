import React, {Component} from 'react'
import DoctorService from "../../services/doctorService"
import {Link} from "react-router-dom"

class MedicalCard extends Component {

  state = {
    patient: {}
  }

  componentDidMount() {
    const doctorService = new DoctorService()

    const { patientId } = this.props

    doctorService.getSinglePatient(patientId).then(response => {
      this.setState({
        patient: response.data.patient
      })
    })
  }

  render() {

    const { patient } = this.state

    return (
      <div className="medicalCard">
        <div className="title">
          <h5>Медична карта паціента {`${patient.lastName} ${patient.firstName} ${patient.patronName}`}</h5>
        </div>
        <hr/>
        <div className="filter">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Початок (формат день.місяць.рік)"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Кінець (формат день.місяць.рік)"/>
            </div>
            <button type="submit" className="btn btn-primary">Фільтрувати</button>
          </form>
        </div>
        <hr/>
        <div className="records">
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Лікар</th>
              <th scope="col">Діагноз</th>
              <th scope="col">Лікування</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>14.05.2019</td>
                <td>Петренко Віктор Віталійович</td>
                <td>Грип</td>
                <td>Для отримання максимального терапевтичного ефекту слід якомога швидше (в ідеалі, протягом 48 годин після появи симптомів) призначати інгібітори нейрамінідази (наприклад, озельтамівір). Для пацієнтів на більш пізній стадії хвороби слід також передбачати прийом лікарських препаратів.
                  Лікування рекомендується проводити не менше 5 днів, але можна продовжувати до отримання задовільних клінічних результатів.
                  Використання кортикостероїдів слід передбачати тільки при наявності інших показань (таких як астма та інші конкретні порушення здоров'я), оскільки воно пов'язане з більш тривалим виведенням вірусів з організму і ослабленням імунітету, що призводить до бактеріальної або грибкової суперінфекції.
                  Всі циркулюючі в даний час віруси грипу стійкі до противірусних препаратів класу адамантанов (таких як амантадин і ремантадин), тому ці препарати не рекомендується застосовувати в якості монотерапії.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to={`/doctor/patient-medical-card/add-record/${patient.id}`} className="btn btn-success">Додати запис</Link>
      </div>
    )
  }
}

export default MedicalCard