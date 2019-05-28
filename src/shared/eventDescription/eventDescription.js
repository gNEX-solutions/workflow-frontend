import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ActionBar from './actionBar';
import Avatar from 'react-avatar';
import imgActionBar from '../../img/imgActionBar.svg';
import './eventDescription.css';
import * as moment from 'moment';

class EventDescription extends Component {
  state = {};

  getSecondcoordinatorDetials() {
    const { eventCoordinatorDetails } = this.props.event;
    // eslint-disable-next-line no-negated-condition
    if (eventCoordinatorDetails[1] !== undefined) {
      return (
        <p className="eventInfo_text">
          &nbsp; &nbsp; {eventCoordinatorDetails[1].name} &nbsp; &nbsp;
          {eventCoordinatorDetails[1].imNumber}
        </p>
      );
    } else {
      return '';
    }
  }

  render() {
    const {
      eventName,
      eventDate,
      eventStartTime,
      eventLocation,
      eventParticipants,
      eventDescription,
      eventBudget,
      eventOrganizer,
      eventCoordinatorDetails,
      eventStatus
    } = this.props.event;
    const editedDate = moment(eventDate).format('Do MMMM');
    const editedTime = moment(eventStartTime, 'hh mm ss').format('hh mm A');
    return (
      <React.Fragment>
        <div id="header_container">
          <Row id="header_row">
            <Col className="col-3">
              <h3 id="event_name">{eventName} </h3>
            </Col>

            <Col className="col-2">
              <p id="date12"> {editedDate}</p>
            </Col>
            <Col className="col-2">
              <p id="time"> {editedTime} </p>
            </Col>
            <Col className="col-2">
              <p id="venue">{eventLocation}</p>
            </Col>
            <Col className="col-1" id="actionbarContainer">
              <OverlayTrigger
                trigger="click"
                key={1}
                placement="left"
                overlay={
                  <Popover id={`popover-positioned`}>
                    <ActionBar status={eventStatus} />
                  </Popover>
                }
              >
                {/* <FontAwesomeIcon icon={faEllipsisH} id="actionbarIcon" /> */}
                <Avatar src={imgActionBar} size="30" />
              </OverlayTrigger>
            </Col>
          </Row>
          <hr size="20" />
          <div id="basic_info">
            <Row id="basic_info_row">
              <Col className="col-4">
                <p className="eventInfo_text">
                  <strong className="evenInfo_title">Organised by :</strong>{' '}
                  Year {eventOrganizer}
                </p>
              </Col>
              <Col className="col-4">
                <p className="eventInfo_text">
                  <strong className="evenInfo_title">Coordinators -</strong>
                </p>
                <p className="eventInfo_text">
                  &nbsp; &nbsp; {eventCoordinatorDetails[0].name} &nbsp; &nbsp;{' '}
                  {eventCoordinatorDetails[0].imNumber}
                </p>

                {this.getSecondcoordinatorDetials()}
              </Col>
              <p className="eventInfo_text">
                <strong className="evenInfo_title">Participants -</strong>{' '}
                {eventParticipants}
              </p>
              <Col className="col-4" />
            </Row>

            <Row id="description_row">
              <p id="description" className="eventInfo_text">
                <strong className="evenInfo_title">Description - </strong>
              </p>
              <p id="detailed_description" className="eventInfo_text">
                {eventDescription}
              </p>
            </Row>

            <Row id="footer">
              <Col className="col-8" />
              <Col className="col-4">
                <p className="eventInfo_text">
                  <strong className="evenInfo_title"> Budget </strong> - Rs{' '}
                  {eventBudget}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventDescription;
