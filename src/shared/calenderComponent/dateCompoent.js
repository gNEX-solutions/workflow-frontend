/* eslint-disable no-negated-condition */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckDouble
} from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { eventStatusEnums } from '../../enums/eventStatus';
import { selectEvent } from '../../store/actions/DashBoardActions';
import './dateComponent.css';
import imgPending from '../../img/pending.svg';
import imgRejected from '../../img/deny.svg';
import imgConfirmed from '../../img/confirmed.svg';

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
    let pointer = '';
    let style = 'default';
    if (eventInfo !== undefined) {
      if (eventInfo.eventStatus === eventStatusEnums.PUBLISHED) {
        icon = <FontAwesomeIcon icon={faCheckDouble} className="single_tick" />;
      } else if (eventInfo.eventStatus === eventStatusEnums.CONFIRMED) {
        // icon = <FontAwesomeIcon icon={faCheck} className="single_tick" />;
        icon = <Avatar src={imgConfirmed} size="20" className="single_tick" />;
        pointer = 'dateComponent';
      } else if (eventInfo.eventStatus === eventStatusEnums.PENDING) {
        icon = <Avatar src={imgPending} size="20" className="warning" />;
        pointer = 'dateComponent';
      } else if (eventInfo.eventStatus === eventStatusEnums.REJECTED) {
        icon = <Avatar src={imgRejected} size="20" className="warning" />;
        pointer = 'dateComponent';
      } else {
        icon = <p id="dummy_para" />;
      }
    } else {
      icon = <p id="dummy_para" />;
    }


    if (now.year() === year && now.month() === month && now.date() === date) {
      style = 'today';
    }
    if (eventInfo !== undefined && selectedEventId === eventInfo.eventId) {
      style = 'selected';
    }
    return (
      <React.Fragment>
        <td
          onClick={() => {
            if (eventInfo !== undefined) {
              return this.eventSelected(eventInfo.eventId);
            }
          }}
          id={pointer}
          className={style}
        >
          <Row>
            {/* <Col className="col-3" /> */}
            <Col className="col-12">
              <p id="date"> {date}</p>
            </Col>
          </Row>
          <Row>
            <Col className="col-6" id="notIcon">
              {icon}
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
