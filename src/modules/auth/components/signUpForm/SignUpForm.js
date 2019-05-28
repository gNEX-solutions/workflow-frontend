// import classnames from "node_modules/classnames";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../../../../shared/TextFieldGroup/TextFieldGroup';
import validateInput from '../LoginValidation';
import { registerUser } from '../../../../store/actions/AuthActions';
import './SignUpForm.css';

export const DESIGNATIONS = ['President', 'Senior Treasure', 'Deparment Head'];

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      password2: '',
      email: '',
      designation: 'President',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.context.router.history.push('/calender');
    }

    if (nextProps.errors) {
      this.state({ errors: nextProps.errors });
    }
  }

  designationSelected = Index => {
    this.setState({
      designation: DESIGNATIONS[Index]
    });
    console.log('----', Index);
  };

  getDesignations = () => {
    const designations = DESIGNATIONS.map((designation, Index) => (
      <Dropdown.Item
        key={Index}
        eventKey={Index}
        onSelect={(Index, this.designationSelected)}
      >
        {designation}
      </Dropdown.Item>
    ));
    return designations;
  };

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
    // const {
    //   firstName,
    //   lastname,
    //   username,
    //   email,
    //   password,
    //   password2
    // } = this.state;

    // const newUser = {
    //   firstName: firstName,
    //   lastName: lastname,
    //   username: username,
    //   email: email,
    //   password: password,
    //   password2: password2
    // };

    // const { registerUser } = this.props;

    e.preventDefault();

    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      // registerUser(newUser, this.props.history);
    }
    // registerUser(newUser, this.props.history);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      firstname,
      lastname,
      errors,
      username,
      password,
      password2,
      isLoading
    } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {errors.form && (
            <div className="alert alert-danger"> {errors.form} </div>
          )}
          <TextFieldGroup
            field="firstname"
            label="FirstName"
            value={firstname}
            error={errors.firstname}
            onChange={this.onChange}
            placeholder="First Name"
          />
          <TextFieldGroup
            field="lastname"
            label="LastName"
            value={lastname}
            error={errors.lastname}
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <TextFieldGroup
            field="username"
            label="Username"
            value={username}
            error={errors.username}
            onChange={this.onChange}
            placeholder="Email"
          />
          <div className="form-group " id="dropdownYear">
            <Dropdown className="designationDropdown">
              <Dropdown.Toggle variant="primary">
                {this.state.designation}
              </Dropdown.Toggle>
              <DropdownMenu>{this.getDesignations()}</DropdownMenu>
            </Dropdown>
          </div>

          <TextFieldGroup
            field="password"
            label="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <TextFieldGroup
            field="password2"
            label="Password"
            value={password2}
            error={errors.password2}
            onChange={this.onChange}
            type="password2"
            placeholder="Retype Password"
          />
          <div className="form-group">
            <button className="btn btn-primary btn-lg" disabled={isLoading}>
              Sign up
            </button>
          </div>
        </form>
        {/* <h5>Forget Password</h5> */}
        <h5 className="signUpRow">
          Already have an Account...?
          <button
            className="btn-signUp"
            href="#"
            onClick={this.props.onLoginPress}
          >
            <u>Login</u>
          </button>
        </h5>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// SignUpForm.contextTypes = {
//   router: PropTypes.shape.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUpForm));
