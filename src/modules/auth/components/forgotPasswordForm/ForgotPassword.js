import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../../../../shared/TextFieldGroup/TextFieldGroup';
import validateInput from '../LoginValidation';
import { login } from '../../../../store/actions/AuthActions';
// import './ForgotPassword.styles.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {}

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
    const { errors, email } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {errors.form && (
            <div className="alert alert-danger"> {errors.form} </div>
          )}
          <TextFieldGroup
            field="email"
            label="Email"
            value={email}
            error={errors.email}
            onChange={this.onChange}
            placeholder="Email"
            // type="email"
          />
          <div className="form-group">
            <button
              className="btn btn-primary btn-lg btn-login"
              // disabled={isLoading}
            >
              Send Request
            </button>
          </div>
        </form>
        <h5>Forget Password</h5>
        <h5>
          <button
            className="btn-signUp"
            href="#"
            onClick={this.props.onBackPress}
          >
            <u>Back</u>
          </button>
        </h5>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

ForgotPassword.contextTypes = {
  router: PropTypes.shape.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(ForgotPassword);
