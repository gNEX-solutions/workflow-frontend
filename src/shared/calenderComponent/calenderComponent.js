import React, { Component } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import * as moment from 'moment';
import './calenderComponent.css';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { connect } from 'react-redux';
import {
  // selectEvent,
  getMonthlyEvents
} from '../../store/actions/DashBoardActions';
import DateCompoent from './dateCompoent';
import TableRowComponent from './tableRowComponent';

class CalenderCompoennt extends Component {
  state = {
    now: moment(),
    year: moment().year(),
    month: moment().month(),
    displayMonth: moment().format('MMMM'),
    activeEventNum: 0
  };
  // changing the first day of the week to monday

  weekDayHeaders = moment
    .weekdaysMin()
    .map(weekday => <th className="table_header">{weekday}</th>);
  daysInMonthAmount;
  firstDay; // return the first day of the month
  lastDay; // last day of the month

  updateMoement() {
    const updatedMoment = moment().set({
      year: this.state.year,
      month: this.state.month
    });
    this.daysInMonthAmount = updatedMoment.daysInMonth();
    this.firstDay = updatedMoment.startOf('month').format('d');
    this.lastDay = updatedMoment.endOf('month').format('d');
  }

  getEventInfoComponents() {
    const { events } = this.props;
    return events.map(eventInfo => {
      return <TableRowComponent info={eventInfo} key={eventInfo.eventId} />;
    });
  }

  // console.log()
  getDopdownYears = () => {
    const years = [];
    for (let i = 2010; i <= moment().get('year'); i++) {
      years.push(
        <Dropdown.Item eventKey={i} onSelect={(i, this.yearItemSelected)}>
          {i}
        </Dropdown.Item>
      );
    }
    return years;
  };
  getDropdownMonths = () => {
    const months = moment.months().map((month, monthIndex) => (
      <Dropdown.Item
        eventKey={monthIndex}
        onSelect={(monthIndex, this.monthItemSelected)}
      >
        {month}
      </Dropdown.Item>
    ));
    return months;
  };

  /////////////////  event action functions ////////////////////
  yearItemSelected = year => {
    const { getMonthlyEvents } = this.props;
    const { month } = this.state;
    const editedMonth = moment(month + 1, 'MM').format('MM');
    getMonthlyEvents({
      month: editedMonth,
      year: year
    });
    this.setState({
      year: year.toString()
    });
    
    // console.log(this.state.year);
  };
  monthItemSelected = monthIndex => {
    const modifiedMonthIndex = parseInt(monthIndex) + 1;
    const { year } = this.state;
    const { getMonthlyEvents } = this.props;
    getMonthlyEvents({
      month: moment(modifiedMonthIndex, 'MM').format('MM'),
      year: year
    });
    this.setState({
      displayMonth: moment(modifiedMonthIndex, 'MM').format('MMMM'),
      month: monthIndex
    });
    
  };

  render() {
    this.updateMoement();
    const daysInMonth = [];
    const blankDaysBefore = [];
    const blankDaysAfter = [];
    let totalDays = [];
    // defining the set of weeks arrays
    const firstWeek = [];
    const secondWeek = [];
    const thirdWeek = [];
    const fouthWeek = [];
    const fifthWeek = [];
    const sixthWeek = [];

    //  blanks of the beg of the month
    for (var i = 0; i < this.firstDay; i++) {
      blankDaysBefore.push(<td className="blank_date" />);
    }

    // month date data
    for (i = 1; i <= this.daysInMonthAmount; i++) {
      const { month, year } = this.state;
      daysInMonth.push(<DateCompoent date={i} month={month} year={year} />);
    }

    // blanks after end of month
    for (i = 6; i > this.lastDay; i--) {
      blankDaysAfter.push(<td className="blank_date" />);
    }
    // console.log(this.lastDay);
    totalDays = [...blankDaysBefore, ...daysInMonth, ...blankDaysAfter];

    totalDays.forEach((day, i) => {
      if (i < 7) {
        firstWeek.push(day);
      } else if (i < 14) {
        secondWeek.push(day);
      } else if (i < 21) {
        thirdWeek.push(day);
      } else if (i < 28) {
        fouthWeek.push(day);
      } else if (i < 35) {
        fifthWeek.push(day);
      } else {
        sixthWeek.push(day);
      }
    });
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col className="col-6" id="dropdownYear">
              <Dropdown>
                <Dropdown.Toggle variant="outline-info">
                  {this.state.year}
                </Dropdown.Toggle>
                <DropdownMenu>{this.getDopdownYears()}</DropdownMenu>
              </Dropdown>
            </Col>
            <Col className="col-6">
              <Dropdown>
                <Dropdown.Toggle variant="outline-info">
                  {this.state.displayMonth}
                </Dropdown.Toggle>
                <DropdownMenu>{this.getDropdownMonths()}</DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row id="calender_row">
            <table
              className="table-condensed   table-responsive"
              id="cal_table"
            >
              <thead>
                <tr>{this.weekDayHeaders}</tr>
              </thead>
              <tbody>
                <tr>{firstWeek}</tr>
                <tr>{secondWeek}</tr>
                <tr>{thirdWeek}</tr>
                <tr>{fouthWeek}</tr>
                <tr>{fifthWeek}</tr>
                <tr>{sixthWeek}</tr>
              </tbody>
            </table>
          </Row>
          <Row>
            <table className="table  ">
              <tbody>{this.getEventInfoComponents()}</tbody>
            </table>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  events: state.dashboard.events,
  selectedEventId: state.dashboard.selectedEventId
});
export default connect(
  mapStateToProps,
  { getMonthlyEvents }
)(CalenderCompoennt);
