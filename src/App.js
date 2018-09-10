import React, { Component } from "react";
import ReactDOM from "react-dom";
import OptionList from "./components/organisms/OptionList";

class FormContainer extends Component {

  handleChange(event) {
    console.log(event);
  }

  render() {

    let options = [
      {text: "hello", firstOption: "push", secondOption: "email"},
      {text: "how", firstOption: "push", secondOption: "email"},
      {text: "are", firstOption: "push", secondOption: "email"},
      {text: "you", firstOption: "push", secondOption: "email"},
      {text: "doing?", firstOption: "push", secondOption: "email"}
    ]

    return (
      <OptionList options={options}/>
    );
  }
}
export default FormContainer;