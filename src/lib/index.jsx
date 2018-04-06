import React, { Component } from "react";
import styles from "./styles.css";


export default class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      open: false,
      ...props,
      labelClass: [styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
      displayValue: '',
      tempValue: null
    }
  }

  componentDidMount() {
    const Day = this.state.value.getDate() > 9 ? this.state.value.getDate() : '0' + this.state.value.getDate()
    const Month = this.state.value.getMonth() > 9 ? this.state.value.getMonth() : '0' + this.state.value.getMonth()
    const Year = this.state.value.getFullYear()
    const Hours = this.state.value.getHours() > 9 ? this.state.value.getHours() : '0' + this.state.value.getHours()
    const Minutes = this.state.value.getMinutes() > 9 ? this.state.value.getMinutes() : '0' + this.state.value.getMinutes()
    this.setState({
      displayValue: `${Day}/${Month}/${Year}, ${Hours}:${Minutes}`
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
  onClose = () => {
    this.setState({
      open: false,
      labelClass: [styles.j337, styles.j332, styles.j333, styles.j336, styles.j335].join(' '),
    })
  }
  trueChange = () => {
    console.log(this.state)
    this.state.value !== this.state.tempValue ?
      this.props.onChange(this.state.value) : ''
  }

  render() {
    return (
      <div onClick={this.onOpen} className={styles.wrap}>
        <label className={this.state.labelClass}>
          DateTimePicker</label>
        <div className={[styles.j343, styles.j344, styles.j347].join(' ')}>
          <input className={styles.input}
                 value={this.state.displayValue}
                 onBlur={this.onClose}
                 onChange={this.trueChange} />

        </div>
      </div>
    )
  }
}

