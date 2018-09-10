import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, value, id, handleChange, className }) => (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      onChange={handleChange}
      className={`input ${className}`}
    />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default Input;