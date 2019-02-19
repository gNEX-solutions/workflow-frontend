import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { LoginWrapper } from './Login.styles';

class Login extends React.Component {
  state = {};

  render() {
    return (
      <LoginWrapper className="row">
        <div className="image-container">
          <img
            src="img/Mask Group 6.png"
            alt="product"
            className="card-img-top"
          />
        </div>
        <div className="col-md-4 col-md-offset-4 login-container">
          <LoginForm />
        </div>
      </LoginWrapper>
    );
  }
}

export default Login;
