import React, { Component } from "react";
import ReactDOM from "react-dom";
import Checkbox from "../../atoms/Checkbox";
import Title from "../../atoms/Title";

class OptionLine extends Component {
  render() {
    let {text, firstOption, secondOption, handleChange} = this.props;

    return (
      <div className="option-line">
        <Title
          text={text}
        />
        <Checkbox
          name={firstOption}
          handleChange={handleChange}
        />
        <Checkbox
          name={secondOption}
          handleChange={handleChange}
        />
      </div>
    );
  }
}
export default OptionLine;