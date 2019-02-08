import React, { Component } from 'react';
import TextFieldGroup from '../../../components/TextFieldGroup';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <form>
        <h1>Login</h1>
        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          // onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          // onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
