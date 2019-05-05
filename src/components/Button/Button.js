import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ type, label, disabled, icon }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    disabled={disabled}
    className={disabled ? styles.disabled : styles.button}
    style={{ backgroundImage: `url(${icon})` }}
  >
    {label}
  </button>
);

Button.defaultProps = {
  type: 'button',
  label: 'КНОПЧИНА',
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
