import React from 'react';
import LoginForm from '../components/LoginForm';
// import { LoginWrapper } from './Login.styles';
import style from './Login.styles.scss';
import './Login.styles.css';

class Login extends React.Component {
  state = {};

  render() {
    return (
      <div className={`${style.loginContainer} ${'loginContainer'} ${'row'}`}>
        <div
          className={`${
            style.__imageContainer
          } ${'__imageContainer'}  ${'col-md-8'}`}
        />
        {/* <div className="col-md-4 col-md-offset-4 login-container"> */}
        <div className={`${style.__loginForm} ${'__loginForm'} ${'col-md-4'}`}>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
