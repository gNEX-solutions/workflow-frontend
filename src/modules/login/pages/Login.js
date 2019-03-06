import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { LoginWrapper } from './Login.styles';
import style from './Login.styles.scss';

class Login extends React.Component {
  state = {};

  render() {
    return (
      <div className={`${style.loginContainer} ${'loginContainer'} ${'row'}`}>
        <div
          className={`${
            style.__imageContainer
          } ${'loginContainer__imageContainer'}  ${'col-md-8'}`}
        >
          {/* <img
            src="img/Mask Group 6.png"
            alt="product"
            // className="card-img-top"
          /> */}
          {/* <h1>test</h1> */}
        </div>
        {/* <div className="col-md-4 col-md-offset-4 login-container"> */}
        <div
          className={`${
            style.__loginForm
          } ${'loginContainer__loginForm'} ${'col-md-4'}`}
        >
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
