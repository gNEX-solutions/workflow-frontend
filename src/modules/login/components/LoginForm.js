import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../../components/TextFieldGroup';
import validateInput from './LoginValidation';
import { login } from '../actions/Login';
import { ButtonContainer } from './LoginForm.styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false,
      token: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.context.router.history.push('/');
    }
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({
        errors
      });
    }

    return isValid;
  };

  onSubmit = e => {
    const { login } = this.props;

    e.preventDefault();

    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      login(this.state);
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
      <div>
        <h1> IMSSA </h1>
        <h4> IMSSA Events Manager </h4>
        <form onSubmit={this.onSubmit}>
          {errors.form && (
            <div className="alert alert-danger"> {errors.form} </div>
          )}
          <TextFieldGroup
            field="username"
            label="Username / Email"
            value={username}
            error={errors.username}
            onChange={this.onChange}
            placeholder="Email"
          />
          <TextFieldGroup
            field="password"
            label="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <div className="form-group">
            <ButtonContainer
              className="btn btn-primary btn-lg"
              disabled={isLoading}
            >
              Login
            </ButtonContainer>
          </div>
        </form>
        <h5>Forget Password</h5>
        <h5>
          New...? <u>Sign up</u>
        </h5>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.shape.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
