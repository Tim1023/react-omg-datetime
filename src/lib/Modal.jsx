import React from 'react';
import styles from "./styles.css";


export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }


  render() {
    return (
      <div className={styles.calendarWrap}>
        <div className={styles.calendarPanel}>
          <div className={styles.calendarHeader}>

            <a className={styles.calendarPrevYearBtn} />
            <a className={styles.calendarPrevMonthBtn} />
            <a className={styles.calendarMonthSelect}>April</a>
            <a className={styles.calendarYearSelect}>2018</a>
            <a className={styles.calendarNextMonthBtn} />
            <a className={styles.calendarNextYearBtn} />
          </div>
          Calendar

        </div>
      </div>
    );
  }
}