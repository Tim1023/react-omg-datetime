import React from 'react';
import styles from "./styles.css";
import { array_chunks } from './helpers/array_chunk'

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      selectedDate: this.props.value,
    }
  }

  renderRows = () => {
    const month = new Date(this.state.value.getFullYear(), this.state.value.getMonth() + 1, 0)
    const preMonth = new Date(this.state.value.getFullYear(), this.state.value.getMonth(), 0)
    const dates = month.getDate()
    const preDates = preMonth.getDate()
    const firstDayInWeek = new Date(month.setDate(1)).getDay()
    const daysArray = Array.from(new Array(dates), (val, index) => index + 1)
    for (let i = 0; i < firstDayInWeek; i++) {
      daysArray.unshift(preDates - i)
    }
    for (let i = 0; daysArray.length < 42; i++) {
      daysArray.push(i + 1)
    }
    return array_chunks(daysArray, 7)
  }

  handlePreYear = () => {
    const preYear = this.state.value.getFullYear() - 1
    const copyDate = new Date(this.state.value.getTime())
    const preYearDate = new Date(copyDate.setFullYear(preYear))
    this.setState({
      value: preYearDate
    })
  }
  handleNextYear = () => {
    const preYear = this.state.value.getFullYear() + 1
    const copyDate = new Date(this.state.value.getTime())
    const preYearDate = new Date(copyDate.setFullYear(preYear))
    this.setState({
      value: preYearDate
    })
  }
  handlePreMonth = () => {
    const preMonth = this.state.value.getMonth() - 1
    const copyDate = new Date(this.state.value.getTime())
    const preYearDate = new Date(copyDate.setMonth(preMonth))
    this.setState({
      value: preYearDate
    })
  }
  handleNextMonth = () => {
    const preMonth = this.state.value.getMonth() + 1
    const copyDate = new Date(this.state.value.getTime())
    const preYearDate = new Date(copyDate.setMonth(preMonth))
    this.setState({
      value: preYearDate
    })
  }
  handleNow = (e) => {
    e.preventDefault()
    this.setState({
      selectedDate: new Date(),
      value: new Date(),
    })
  }

  handleSelectedMonthClick = (date) => {
    const copyDate = new Date(this.state.value.getTime())
    const selectedDate = new Date(copyDate.setDate(date))
    this.setState({
      selectedDate: selectedDate
    })
  }
  handleOtherMonthClick = (date) => {
    const copyDate = new Date(this.state.value.getTime())
    const monthChange = date > 15 ?
      this.state.value.getMonth() - 1 :
      this.state.value.getMonth() + 1
    const AfterMonthDate = new Date(copyDate.setMonth(monthChange))
    const selectedDate = new Date(AfterMonthDate.setDate(date))
    this.setState({
      value: selectedDate,
      selectedDate: selectedDate,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.selectedDate)
  }
  handleCancel = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.value)
  }

  render() {
    let rowOrder = 0;
    const rowOrderPlus = () => {
      rowOrder = rowOrder + 1
    }
    return (
      <div className={styles.calendarWrap}
           tabIndex={0}
        // onBlur={this.handleCancel}
        // TODO MODAL ON BLUR
           style={{display: this.props.open ? 'block' : 'none'}}
      >
        <div className={styles.calendarPanel}>
          <div className={styles.calendarHeader}>

            <a className={styles.calendarPrevYearBtn} onClick={this.handlePreYear} />
            <a className={styles.calendarPrevMonthBtn} onClick={this.handlePreMonth} />
            <a className={styles.calendarMonthSelect}>{this.state.value.toLocaleString([], {month: "short"})}</a>
            <a className={styles.calendarYearSelect}>{this.state.value.getFullYear()}</a>
            <a className={styles.calendarNextMonthBtn} onClick={this.handleNextMonth} />
            <a className={styles.calendarNextYearBtn} onClick={this.handleNextYear} />
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
                this.renderRows().map((row, index) => (
                  <tr role="row" className="row" key={'row' + index}>
                    {
                      row.map((col, index) => (
                        <td role="gridCell" className={styles.calendarCell} key={'col' + index}>
                          {
                            col - rowOrder > -6 && col - rowOrder < 2 ?
                              //Selected Month
                              new Date().getFullYear() === this.state.value.getFullYear()
                              && new Date().getMonth() === this.state.value.getMonth()
                              && new Date().getDate() === col ?
                                this.state.selectedDate.getFullYear() === this.state.value.getFullYear()
                                && this.state.selectedDate.getMonth() === this.state.value.getMonth()
                                && this.state.selectedDate.getDate() === col ?
                                  <div className={styles.calendarDate + ' ' + styles.selectedDateColor}
                                       onClick={() => this.handleSelectedMonthClick(col)}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div> :
                                  //Selected Month Today
                                  <div className={styles.calendarDate + ' ' + styles.calendarToday}
                                       onClick={() => this.handleSelectedMonthClick(col)}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div> :
                                //Selected Month Date
                                this.state.selectedDate.getFullYear() === this.state.value.getFullYear()
                                && this.state.selectedDate.getMonth() === this.state.value.getMonth()
                                && this.state.selectedDate.getDate() === col ?
                                  <div className={styles.calendarDate + ' ' + styles.selectedDateColor}
                                       onClick={() => this.handleSelectedMonthClick(col)}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div> :
                                  <div className={styles.calendarDate}
                                       onClick={() => this.handleSelectedMonthClick(col)}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div> :
                              //After Selected Month Today
                              col - rowOrder < -5
                              && new Date().getFullYear() === this.state.value.getFullYear()
                              && new Date().getMonth() === this.state.value.getMonth() + 1
                              && new Date().getDate() === col ?
                                <div className={styles.calendarDate + ' ' + styles.calendarToday}
                                     onClick={() => {
                                       this.handleOtherMonthClick(col)
                                     }}
                                     aria-selected="false"
                                     aria-disabled="false">{col}</div> :
                                //Before Selected Month Today
                                col - rowOrder > 1
                                && new Date().getFullYear() === this.state.value.getFullYear()
                                && new Date().getMonth() === this.state.value.getMonth() - 1
                                && new Date().getDate() === col ?
                                  <div className={styles.calendarDate + ' ' + styles.calendarToday}
                                       onClick={() => {
                                         this.handleOtherMonthClick(col)
                                       }}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div> :
                                  <div className={styles.calendarDate + ' ' + styles.otherMonthDateColor}
                                       onClick={() => {
                                         this.handleOtherMonthClick(col)
                                       }}
                                       aria-selected="false"
                                       aria-disabled="false">{col}</div>
                          }
                          {rowOrderPlus()}
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div className={styles.jss3242}>
            <div className={styles.jss3243}>
              <button tabIndex={0}
                      className={[styles.jss245, styles.jss3245, styles.jss3247, styles.jss3244].join(' ')}
                      type="button"
                      onClick={this.handleNow}
                      aria-label="Now">
                <span className={styles.jss3246}>Now</span>
                <span className={styles.jss254} />
              </button>
            </div>
            <div className={styles.jss3243}>
              <button tabIndex={0}
                      className={[styles.jss245, styles.jss3245, styles.jss3247, styles.jss3244].join(' ')}
                      type="button"
                      onClick={this.handleCancel}
                      aria-label="Cancel">
                <span className={styles.jss3246}>Cancel</span>
                <span className={styles.jss254} />
              </button>
            </div>

            <div className={styles.jss3243}>
              <button tabIndex={0}
                      className={[styles.jss245, styles.jss3245, styles.jss3247, styles.jss3244].join(' ')}
                      type="button"
                      onClick={this.handleSubmit}
                      aria-label="OK">
                <span className={styles.jss3246}>OK</span>
                <span className={styles.jss254} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}