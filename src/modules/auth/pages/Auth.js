import React, { Component } from 'react';
import LoginForm from '../components/loginForm/LoginForm';
import SignUpForm from '../components/signUpForm/SignUpForm';
import ForgotPassword from '../components/forgotPasswordForm/ForgotPassword';
import './Auth.styles.css';

export const VIEW_TYPES = {
  login: 1001,
  signUp: 1002,
  forgonPassword: 1003
};

class Auth extends Component {
  static defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      currentViewType: this.props.viewType
    };
  }

  handleOnForgetPasswordPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.forgonPassword });
  };

  handleOnSignUpPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.signUp });
  };

  handleOnLoginPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.login });
  };

  renderLoginView = () => (
    <LoginForm
      onSignUpPress={this.handleOnSignUpPress}
      onForgetPasswordPress={this.handleOnForgetPasswordPress}
    />
  );

  renderSignUpView = () => (
    <SignUpForm onLoginPress={this.handleOnLoginPress} />
  );

  renderForgotPasswordView = () => (
    <ForgotPassword onBackPress={this.handleOnLoginPress} />
  );

  renderContent = () => {
    const viewMap = {
      [VIEW_TYPES.login]: this.renderLoginView,
      [VIEW_TYPES.signUp]: this.renderSignUpView,
      [VIEW_TYPES.forgonPassword]: this.renderForgotPasswordView
    };
    const { signUp } = this.props;

    if (signUp) {
      // this.setState({
      //   currentViewType: VIEW_TYPES.signUp
      // });
    }

    const view = viewMap[this.state.currentViewType]();

    return (
      <React.Fragment>
        <div className="loginContainer row">
          <div className="imageContainer col-md-8" />
          {/* <div className="col-md-4 col-md-offset-4 login-container"> */}
          <div className="loginForm col-md-4">
            <h1> IMSSA </h1>
            <h4> IMSSA Events Manager </h4>
            {/* <LoginForm /> */}
            {view}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default Auth;
