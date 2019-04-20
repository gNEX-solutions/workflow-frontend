import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  field,
  value,
  // label,
  error,
  type,
  onChange,
  checkUserExists,
  placeholder
}) => (
  <div className="form-group">
    {/* <label className="control-label">{label}</label> */}
    <input
      onChange={onChange}
      onBlur={checkUserExists}
      value={value}
      type={type}
      name={field}
      className={classnames('form-control form-control-lg ', {
        'is-invalid': error
      })}
      placeholder={placeholder}
    />
    {error && <span className="invalid-feedback">{error}</span>}
  </div>
);

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func,
  placeholder: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text',
  placeholder: null,
  checkUserExists: null,
  error: null
};

export default TextFieldGroup;
