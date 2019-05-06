import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import * as moment from 'moment';
import HeaderComopnet from '../../shared/header/headerComponent';
import MainMenuCompoannent from '../../shared/mainMenu/mainMenu';
import './eventExplorer.css';
import MonthEventComponent from './monthEventsComponet';

class EventExplorer extends Component {
  state = {};

  // getMonths = () => {
  //   const months = moment.months().map((month, monthIndex) => {
  //     return <tr key={monthIndex}> <td >{month}</td> </tr>;
  //   });
  //   return months;
  // }

  getMonthEventComponet = () => {
    const totalEventComponets = [];
    moment.months().forEach((mnth, mnthIndex) => {
      const monthEventComonents = [];
      for (let level = 1; level <= 4; level++) {
        monthEventComonents.push(
          <td>
            <MonthEventComponent month={mnthIndex} level={level} onEventCalendarPress={this.props.onEventCalendarPress} />
          </td>
        );
      }
      totalEventComponets.push(
        <tr>
          <td className="monthLabel">{mnth}</td>
          {monthEventComonents[0]}
          {monthEventComonents[1]}
          {monthEventComonents[2]}
          {monthEventComonents[3]}
        </tr>
      );
    });
    return totalEventComponets;
  };

  render() {
    // this.getMonthEventComponet();
    return (
      <React.Fragment>
        <Row className="eventExp_row">
          {/* <div className="table-responsive"> */}
          <Col className="col-md-12 col-sm-12">
            <Table striped bordered responsive id="main_table">
              <thead>
                <tr>
                  <th> &nbsp; &nbsp;</th>
                  <th id="table_header">
                    <p id="table_header_text"> 1st Year</p>
                  </th>
                  <th id="table_header">
                    <p id="table_header_text">2nd Year</p>
                  </th>
                  <th id="table_header">
                    <p id="table_header_text">3rd Year</p>
                  </th>
                  <th id="table_header">
                    <p id="table_header_text">4th Year</p>
                  </th>
                </tr>
              </thead>
              <tbody>{this.getMonthEventComponet()}</tbody>
            </Table>
          </Col>
          {/* </div> */}
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
