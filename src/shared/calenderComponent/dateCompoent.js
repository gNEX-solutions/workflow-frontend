import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCheckDouble,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import './dateComponent.css';

class DateComponent extends Component {
  state = {};
  render() {
    let icon;
    if (this.props.status === 'double_check') {
      icon = <FontAwesomeIcon icon={faCheckDouble} className="single_tick" />;
      // icon = <icon>{sigleCheckIcon}</icon>;
    } else if (this.props.status === 'single_check') {
      icon = <FontAwesomeIcon icon={faCheck} className="single_tick" />;
    } else if (this.props.status === 'warn') {
      icon = (
        <FontAwesomeIcon icon={faExclamationTriangle} className="warning" />
      );
    } else {
      icon = <p id="dummy_para" />;
    }
    return (
      <React.Fragment>
        <Row>
          <Col className="col-6" />
          <Col className="col-6">
            {/* <FontAwesomeIcon icon={faCheckCircle} className="single_tick"></FontAwesomeIcon> */}
            {icon}
          </Col>
        </Row>
        <Row>
          <Col className="col-3" />
          <Col className="col-6">
            <p id="date"> {this.props.date}</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DateComponent;
