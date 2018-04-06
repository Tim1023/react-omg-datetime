import React, { Component } from "react";
import styles from "./styles.css";


export default class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: Date(),
      open: false,
      ...props,
      labelClass:[styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
    }
  }

  onOpen = () => {
    this.setState({
      open: true,
      labelClass:[styles.j337, styles.j332, styles.j333, styles.j336, styles.j335, styles.j338].join(' '),
    })
  }
  onClose = () => {
    this.setState({
      open: false,
      labelClass:[styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
    })
  }
  render() {
    return (
      <div onClick={this.onOpen} className={styles.wrap}>
        <label className={this.state.labelClass}>
          DateTimePicker</label>
        <div className={[styles.j343, styles.j344, styles.j347].join(' ')}>
          <input className={styles.input} defaultValue={this.state.value} onBlur={this.onClose}  />

        </div>
      </div>
    )
  }
}

