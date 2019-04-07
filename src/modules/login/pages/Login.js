import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
// import { LoginWrapper } from './Login.styles';
// import style from './Login.styles.scss';
import './Login.styles.css';

class Login extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="loginContainer row">
          <div className="imageContainer col-md-8" />
          {/* <div className="col-md-4 col-md-offset-4 login-container"> */}
          <div className="loginForm col-md-4">
            <LoginForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
