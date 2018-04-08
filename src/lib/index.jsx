import React, { Component } from "react";
import Modal from "./Modal";

export default class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      open: false,
      ...props,
      labelClass: `j337 j332 j333 j336 j335`,
      tempValue: null,
      displayValue: ''
    }
  }

  componentDidMount() {
    this.props.seconds ? this.setState({displayValue: this.state.value.toLocaleString()})
      : this.setState({
        displayValue: this.state.value.toLocaleString([], {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      })
  }

  onOpen = () => {
    const temp = this.state.value
    this.setState({
      open: true,
      tempValue: temp,
      labelClass: `j337 j332 j333 j336 j335 j338`,
    })
  }

  onSubmit = (val) => {
    this.setState({
      value: val,
      open: false,
      labelClass: `j337 j332 j333 j336 j335`,
      displayValue: this.props.seconds ? val.toLocaleString() : val.toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    })
    val !== this.state.tempValue ?
      this.props.onChange(this.state.value) : ''
  }


  render() {
    return (
      <div className="wrap">
        <div onClick={this.onOpen} className="topWrap">
          <label className={this.state.labelClass}>
            {this.props.label}</label>
          <div className="j343 j344 j347">
            <input className="dateTimeInput"
                   value={this.state.displayValue} />
          </div>
        </div>
        <Modal open={this.state.open} onSubmit={this.onSubmit} value={this.state.value} seconds={this.props.seconds} />
      </div>
    )
  }
}

