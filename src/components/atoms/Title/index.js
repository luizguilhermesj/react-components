import React from "react";
import PropTypes from "prop-types";
const Title = ({ text }) => <span>{text}</span>;

Title.propTypes = {
  text: PropTypes.string.isRequired
};
export default Title;