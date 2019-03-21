import React from 'react'
import { withFormik } from "formik"
import { withRouter } from "react-router-dom"
import DoctorService from "../../services/doctorService"

const AddPatientForm = (props) => {

  const renderErrors = (errors) => {
    if (errors.length > 0) {
      return (
        <div className="alert alert-danger">
          <ul>
            {
              errors.map((err, idx) => {
                return (
                  <li key={idx}>{err}</li>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <h1>Створення нового паціента</h1>

      <hr/>
      <h6>Персональна інформація</h6>
      <hr/>

      {renderErrors(errors)}

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
        <option value="1">Міська лікарня №1</option>
        <option value="2">Міська лікарня №3</option>
        <option value="3">Міська лікарня №3</option>

      </select>

      <button type="submit" className="btn btn-primary">Зберегти</button>

      <hr/>
    </form>
  )
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
    hospital: ''
  }),

  validate: values => {
    let errors = []

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
      errors.push("Email обов'язковий")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.push('Формат email неправильний')
    }

    if (!firstName) {
      errors.push("Ім'я обов'язкове")
    }

    if (!lastName) {
      errors.push("Прізвище обов'язкове")
    }

    if (!patronName) {
      errors.push("По-батькові обов'язкове")
    }

    if (!street) {
      errors.push("Назва вулиці обов'язкова")
    }

    if (!streetNumber) {
      errors.push("Номер будинку обов'язковий")
    }

    if (!hospital || isNaN(parseInt(hospital))) {
      errors.push("Лікарня обов'язкова")
    }

    if (!password) {
      errors.push("Пароль обов'язковий")
    } else if (password.trim().length < 8) {
      errors.push("Пароль має бути більше 8 символів")
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting, props }) => {

    const doctorService = new DoctorService()

    values.hospital = {
      id: parseInt(values.hospital)
    }

    doctorService.addPatient(values).then(response => {
      console.log(response)
    })

    setSubmitting(false)
  }
})(AddPatientForm))