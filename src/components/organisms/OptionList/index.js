import React, { Component } from "react";
import ReactDOM from "react-dom";
import OptionLine from "../../molecules/OptionLine";

class OptionList extends Component {

  handleChange(event) {
    console.log(event);
  }

  render() {
    let {options} = this.props;
    return (
      <div className="option-list">
        {
          options.map( (el,i) => 
            <OptionLine
              text={el.text}
              firstOption = {el.firstOption}
              secondOption = {el.secondOption}
              handleChange={this.handleChange}
              key={i}
            />
          )
        }
      </div>
    );
  }
}
export default OptionList;