import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../../../shared/TextFieldGroup/TextFieldGroup';
import validateInput from '../LoginValidation';
import { login } from '../../../../store/actions/AuthActions';
import './LoginForm.styles.css';
import { Redirect } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isValid: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.context.router.history.push('/calender');
    }
  }

  isValid = () => {
    // const { errors, isValid } = validateInput(this.state);

    // if (!isValid) {
    //   this.setState({
    //     errors
    //   });
    // }

    // return isValid;
    const { username, password } = this.state;

    if (username === "dinith" && password === "din1234") {
      return true;
    }
  };

  onSubmit = e => {
    const { login } = this.props;
    console.log("submit clicked by dj");
    // e.preventDefault();

    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true,
        isValid: true
      });
      // login(this.state);
      // return (
      //   <Redirect to="/done"/>
      // )
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors, username, password, isLoading, isValid } = this.state;
    if (isValid) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div>
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
          // type="email"
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
            <button className="btn  btn-lg btn-login" disabled={isLoading}>
              Login
            </button>
          </div>
        </form>
        <h5>
          <button
            className="btn-signUp"
            href="#"
            onClick={this.props.onForgetPasswordPress}
          >
            <u>Forget Password</u>
          </button>
        </h5>
        <h5 className="signUpRow">
          New member?
          <button
            className="btn-signUp"
            href="#"
            onClick={this.props.onSignUpPress}
          >
            <u>sign up</u>
          </button>
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
