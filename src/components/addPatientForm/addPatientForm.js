import React, { Component } from 'react'
import { withFormik } from "formik"
import { withRouter } from "react-router-dom"
import DoctorService from "../../services/doctorService"
import HospitalService from "../../services/hospitalService"

class AddPatientForm extends Component {

  state = {
    hospitals: []
  }

  async componentDidMount() {
    const hospitalService = new HospitalService()

    const res = await hospitalService.hospitals()

    this.setState({
      hospitals: res.data.hospitals
    })
  }

  renderErrors = (errors, touched) => {

    const alertStyle = {
      display: 'none'
    }

    if (Object.keys(errors).length > 0) {
      return (
        <div className="alert alert-danger" style={alertStyle}>
          <ul>
            {
              Object.keys(errors).map((name, idx) => {
                if (touched[name]) {
                  alertStyle.display = 'block'

                  return (
                    <li key={idx}>{errors[name]}</li>
                  )
                } else {
                  return ''
                }
              })
            }
          </ul>
        </div>
      )
    }
  }

  hospitalOptions = () => {
    const { hospitals } = this.state

    return hospitals.map(hospital =>
      <option key={hospital.id} value={hospital.id}>{hospital.name}</option>
    )
  }

  render() {

    const {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      touched
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <h1>Створення нового паціента</h1>

        <hr/>
        <h6>Персональна інформація</h6>
        <hr/>

        {this.renderErrors(errors, touched)}

        <div className="form-group">
          <label htmlFor="firstName">Ім'я</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть ім'я"/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Прізвище</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть прізвище"/>
        </div>
        <div className="form-group">
          <label htmlFor="patronName">По-батькові</label>
          <input
            type="text"
            className="form-control"
            id="patronName"
            value={values.patronName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть по-батькові"/>
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть email"/>
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть пароль"/>
        </div>

        <hr/>
        <h6>Адреса</h6>
        <hr/>

        <div className="form-group">
          <label htmlFor="street">Вулиця</label>
          <input
            type="text"
            className="form-control"
            id="street"
            value={values.street}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть вулицю"/>
        </div>
        <div className="form-group">
          <label htmlFor="streetNumber">Будинок</label>
          <input
            type="number"
            className="form-control"
            id="streetNumber"
            value={values.streetNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть номер будинку"/>
        </div>
        <div className="form-group">
          <label htmlFor="apartmentNumber">Номер квартири</label>
          <input
            type="number"
            className="form-control"
            id="apartmentNumber"
            value={values.apartmentNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="Введіть номер квартири"/>
        </div>

        <hr/>
        <h6>Лікарня</h6>
        <hr/>

        <select
          className="custom-select form-group"
          name="hospital"
          value={values.hospital}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off">

          <option defaultValue>Оберіть вашу лікарню</option>
          {this.hospitalOptions()}

        </select>

        <button type="submit" className="btn btn-primary">Зберегти</button>

        <hr/>
      </form>
    )
  }
}

export default withRouter(withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    patronName: '',
    street: '',
    streetNumber: '',
    apartmentNumber: '',
    hospital: '',
    birthday: new Date().toISOString()
  }),

  validate: values => {
    let errors = {}

    const {
      email,
      password,
      firstName,
      lastName,
      patronName,
      street,
      streetNumber,
      hospital
    } = values

    if (!email) {
      errors.email = "Email обов'язковий"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Формат email неправильний'
    }

    if (!firstName) {
      errors.firstName = "Ім'я обов'язкове"
    }

    if (!lastName) {
      errors.lastName = "Прізвище обов'язкове"
    }

    if (!patronName) {
      errors.patronName = "По-батькові обов'язкове"
    }

    if (!street) {
      errors.street = "Назва вулиці обов'язкова"
    }

    if (!streetNumber) {
      errors.streetNumber = "Номер будинку обов'язковий"
    }

    if (!hospital || isNaN(parseInt(hospital))) {
      errors.hospital = "Лікарня обов'язкова"
    }

    if (!password) {
      errors.password = "Пароль обов'язковий"
    } else if (password.trim().length < 8) {
      errors.password = "Пароль має бути більше 8 символів"
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting, props }) => {

    const doctorService = new DoctorService()

    values.hospital = {
      id: parseInt(values.hospital)
    }

    doctorService.savePatient(values).then(response => {
      if (response.status === 200 && response.data.message === 'OK') {
        props.history.push('/')
      }
    })

    setSubmitting(false)
  }
})(AddPatientForm))