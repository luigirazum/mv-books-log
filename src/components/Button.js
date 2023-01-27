import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, buttonClass } = props;

  return (
    <button type="button" className={buttonClass}>
      {text}
    </button>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  buttonClass: null,
  text: 'button',
};

export default Button;
