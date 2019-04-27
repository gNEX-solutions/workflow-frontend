import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const LoginValidation = data => {
  const errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'The name must me 2 and 30 characters';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'The password must be atleast 6 characters';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default LoginValidation;
