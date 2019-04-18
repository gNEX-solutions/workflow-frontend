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
    moment.months().map((mnth, mnthIndex) => {
      const monthEventComonents = [];
      for (let year = 1; year <= 4; year++) {
        monthEventComonents.push(
          <td>
            <MonthEventComponent month={mnthIndex} year={year} />
          </td>
        );
      }
      totalEventComponets.push(
        <tr>
          {mnth}
          {monthEventComonents[0]}
          {monthEventComonents[1]}
          {monthEventComonents[2]}
          {monthEventComonents[3]}
        </tr>
      );
    });
    return totalEventComponets;
  }

  render() {
    // this.getMonthEventComponet();
    return (
      <React.Fragment>
        <Row>
          <HeaderComopnet />
        </Row>
        <Row>
          <MainMenuCompoannent />
        </Row>

        <Row>
          <div className="table-responsive">
            <Col className="col-md-10 col-sm-10">
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th> &nbsp; &nbsp;</th>
                    <th>1st Year</th>
                    <th>2nd Year</th>
                    <th>3rd Year</th>
                    <th>4th Year</th>
                  </tr>
                </thead>
                <tbody>{this.getMonthEventComponet()}</tbody>
              </Table>
            </Col>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
