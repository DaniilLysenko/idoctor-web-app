import React from 'react'
import { withFormik } from "formik"
import { withRouter } from 'react-router-dom'

import './loginForm.css'

const LoginForm = (props) => {

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
    handleSubmit,
    type
  } = props

  let loginIcon = ''

  switch (type) {
    case 'doctor':
      loginIcon = 'https://image.flaticon.com/icons/svg/387/387561.svg'
      break
    case 'user':
      loginIcon = 'https://image.flaticon.com/icons/svg/1467/1467464.svg'
      break
  }

  return (
    <form className="form-signIn" onSubmit={handleSubmit}>
      <img
        className="mb-4" src={loginIcon}
        width="72"
        height="72"
        alt="Login Icon"
      />
      <h1 className="h3 mb-3 font-weight-normal">Будь ласка, залогіньтесь</h1>
      <input
        type="email"
        className="form-control"
        value={values.email}
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        id="inputEmail"
        placeholder="Email"
      />
      <br/>
      <input
        type="password"
        className="form-control"
        value={values.password}
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        id="inputPassword"
        placeholder="Пароль"
      />

      {renderErrors(errors)}

      <button type="submit" className="btn btn-primary">Ввійти</button>
    </form>
  )
}

export default
  withRouter(withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    validate: values => {
      const errors = []

      const { password, email } = values

      if (!email) {
        errors.push("Email обов'язковий")
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.push('Формат email неправильний')
      }

      if (!password) {
        errors.push("Пароль обов'язковий")
      } else if (password.trim().length < 8) {
        errors.push("Пароль має бути більше 8 символів")
      }

      return errors
    },

    handleSubmit: (values, { setSubmitting, props }) => {

      const { password, email } = values

      const { service } = props

      service.login(email, password)
        .then(response => {

          localStorage.setItem('user', JSON.stringify(response.data.user))

          let redirect

          switch (response.role) {
            case 'ROLE_DOCTOR':
              redirect = '/doctor'
              break

            default:
              redirect = '/'
          }

          props.history.push(redirect)
        })
        .catch(err => {
          alert('User not found')
        })

      setSubmitting(false)
    }
  })(LoginForm))