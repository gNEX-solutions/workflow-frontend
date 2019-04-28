/* eslint-disable no-negated-condition */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCheckDouble,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { selectEvent } from '../../store/actions/DashBoardActions';
import './dateComponent.css';

class DateComponent extends Component {
  state = {};

  getEventInfo() {
    const { events, date } = this.props;
    return events.filter(event => {
      const dateMoment = new moment(event.eventDate).date();
      return dateMoment === parseInt(date);
    });
  }
  eventSelected(id) {
    // console.log(id);
    this.props.selectEvent(id);
  }

  render() {
    const eventInfo = this.getEventInfo()[0];
    console.log(eventInfo);
    let icon;
    if (eventInfo != undefined) {
      if (eventInfo.eventApprovedStatus === 'PUBLISHED') {
        icon = <FontAwesomeIcon icon={faCheckDouble} className="single_tick" />;
        // icon = <icon>{sigleCheckIcon}</icon>;
      } else if (eventInfo.eventApprovedStatus === 'APPROVED') {
        icon = <FontAwesomeIcon icon={faCheck} className="single_tick" />;
      } else if (eventInfo.eventApprovedStatus === 'PENDING') {
        icon = (
          <FontAwesomeIcon icon={faExclamationTriangle} className="warning" />
        );
      } else {
        icon = <p id="dummy_para" />;
      }
    } else {
      icon = <p id="dummy_para" />;
    }
    return (
      <React.Fragment>
        <Row onClick={() => this.eventSelected(eventInfo.eventId)}>
          <Col className="col-6" />
          <Col className="col-6">
            {/* <FontAwesomeIcon icon={faCheckCircle} className="single_tick"></FontAwesomeIcon> */}
            {icon}
          </Col>
        </Row>
        <Row onClick={() => this.eventSelected(eventInfo.eventId)}>
          {/* <Col className="col-3" /> */}
          <Col className="col-12">
            <p id="date"> {this.props.date}</p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.dashboard.events
});

export default connect(
  mapStateToProps,
  { selectEvent }
)(DateComponent);
