import React, { Component } from "react";

class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      value: Date(),
    }
  }

  render() {
    return (
      <div>{this.state.value}</div>
    )
  }
}

export default DateTimeInput;
