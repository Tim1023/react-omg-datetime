import React, { Component } from "react";
import styles from "./styles.css";


export default class DateTimeInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: Date(),
      open: false,
      ...props,
    }
  }

  onOpen = () => {
    this.setState({
      open: true
    })
  }

  render() {
    console.log(styles.wrap)
    return (
      <div onClick={this.onOpen} className={styles.wrap} >
        <input defaultValue={this.state.value} />
      </div>
    )
  }
}

