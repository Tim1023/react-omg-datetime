import React from 'react';
import styles from "./styles.css";
import { array_chunks } from './helpers/array_chunk'

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }


  render() {
    // const list = () => {
    const days = new Date(this.state.value.getFullYear(), this.state.value.getMonth(), 0).getDate();
    const daysArray = Array.from(new Array(days), (val, index) => index + 1);
    const rows = array_chunks(daysArray, 7)

    // }
    return (
      <div className={styles.calendarWrap}
           tabIndex={0}
           onBlur={this.props.onClose}
           style={{display: this.props.open ? 'block' : 'none'}}
      >
        <div className={styles.calendarPanel}>
          <div className={styles.calendarHeader}>

            <a className={styles.calendarPrevYearBtn} />
            <a className={styles.calendarPrevMonthBtn} />
            <a className={styles.calendarMonthSelect}>{this.state.value.toLocaleString([], {month: "short"})}</a>
            <a className={styles.calendarYearSelect}>{this.state.value.toLocaleString([], {day: "2-digit"})}</a>
            <a className={styles.calendarNextMonthBtn} />
            <a className={styles.calendarNextYearBtn} />
          </div>
          <div className={styles.calendarBody}>
            <table className={styles.calendarTable}>
              <thead>
              <tr role={'row'}>
                <th role={'columnHeader'} title={'Sun'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Su
                </span>
                </th>
                <th role={'columnHeader'} title={'Mon'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Mo
                </span>
                </th>
                <th role={'columnHeader'} title={'Tue'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Tu
                </span>
                </th>
                <th role={'columnHeader'} title={'Wed'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  We
                </span>
                </th>
                <th role={'columnHeader'} title={'Thu'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Th
                </span>
                </th>
                <th role={'columnHeader'} title={'Fri'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Fr
                </span>
                </th>
                <th role={'columnHeader'} title={'Sat'} className={styles.calendarColumnHeader}>
                <span className={styles.calendarColumnHeaderInner}>
                  Sa
                </span>
                </th>
              </tr>
              </thead>
              <tbody>
              {
                rows.map((row,index) => (
                  <tr role="row" className="row" key={'row'+index}>
                    {
                      row.map((col,index) => (
                        <td role="gridcell"  className={styles.calendarCell} key={'col'+index}>
                          <div className={styles.calendarDate} aria-selected="false" aria-disabled="false">{col}</div>
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}