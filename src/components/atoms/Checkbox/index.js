import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../../primitives/Input";
import './index.css'

class Checkbox extends Component {
  render() {
    let { name, value, id, handleChange, label } = this.props;

    label = label ? <label for={id}>{label}</label> : null;

    return (
      <span className="checkbox-container">
        <Input
          type='checkbox'
          name={name}
          value={value}
          id={id}
          handleChange={handleChange}
          className='checkbox'
        />
        {label}
      </span>
    );
  }
}
export default Checkbox;