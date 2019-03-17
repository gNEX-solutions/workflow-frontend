import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const LoginValidation = data => {
  const errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default LoginValidation;
