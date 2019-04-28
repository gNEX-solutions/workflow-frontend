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
      return dateMoment === date;
    });
  }
  eventSelected(id) {
    // console.log(id);
    this.props.selectEvent(id);
  }

  render() {
    const now = moment();
    const { month, year, date, selectedEventId } = this.props;
    const eventInfo = this.getEventInfo()[0];
    console.log(now.month());
    let icon;
    let style = '';
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

    if (now.year() == year && now.month() == month && now.date() == date) {
      style = 'today';
    }
    if (eventInfo != undefined && selectedEventId === eventInfo.eventId) {
      style = 'selected';
    }
    return (
      <React.Fragment>
        <td onClick={() => {
          if (eventInfo != undefined) {
            return this.eventSelected(eventInfo.eventId)
          }
        }}
          className={style}
        >
          <Row >
            <Col className="col-6" />
            <Col className="col-6">
              {/* <FontAwesomeIcon icon={faCheckCircle} className="single_tick"></FontAwesomeIcon> */}
              {icon}
            </Col>
          </Row>
          <Row  >
            {/* <Col className="col-3" /> */}
            <Col className="col-12">
              <p id="date"> {date}</p>
            </Col>
          </Row>
        </td>
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
  { selectEvent }
)(DateComponent);
