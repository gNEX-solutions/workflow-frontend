import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextFieldGroup from '../../../components/TextFieldGroup'
import validateInput from './LoginValidation'
import { login } from '../actions/Login'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state)

    if (!isValid) {
      this.setState({
        errors
      })
    }

    return isValid
  }

  onSubmit = e => {
    const { login } = this.props
    e.preventDefault()
    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      })
      login(this.state).then(
        res => this.context.router.push('/'),
        err =>
          this.setState({
            errors: err.data.errors,
            isLoading: false
          })
      )
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { errors, identifier, password, isLoading } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h1> Login </h1>{' '}
        {errors.form && (
          <div className='alert alert-danger'> {errors.form} </div>
        )}{' '}
        <TextFieldGroup
          field='identifier'
          label='Username / Email'
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />{' '}
        <TextFieldGroup
          field='password'
          label='Password'
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type='password'
        />
        <div className='form-group'>
          <button className='btn btn-primary btn-lg' disabled={isLoading}>
            Login{' '}
          </button>{' '}
        </div>{' '}
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(
  null,
  {
    login
  }
)(LoginForm)
