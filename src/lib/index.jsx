import React, { Component } from "react";
import styles from "./styles.css";
import Modal from "./Modal";

export default class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      open: false,
      ...props,
      labelClass: [styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
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
      labelClass: [styles.j337, styles.j332, styles.j333, styles.j336, styles.j335, styles.j338].join(' '),
    })
  }

  onSubmit = (val) => {
    this.setState({
      value: val,
      open: false,
      labelClass: [styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
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
      <div className={styles.wrap}>
        <div onClick={this.onOpen} className={styles.topWrap}>
          <label className={this.state.labelClass}>
            DateTimePicker</label>
          <div className={[styles.j343, styles.j344, styles.j347].join(' ')}>
            <input className={styles.input}
                   value={this.state.displayValue} />
          </div>
        </div>
        <Modal open={this.state.open} onSubmit={this.onSubmit} value={this.state.value} seconds={this.props.seconds} />
      </div>
    )
  }
}

