/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckDouble,
  faCalendarTimes
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
// import SampleData from '../../services/sampleDataSet';
import { connect } from 'react-redux';
import { deleteEvent, updateEvent } from '../../store/actions/DashBoardActions';
import { eventStatusEnums } from '../../enums/eventStatus';
import { eventInspectorEnums } from "../../enums/eventInspectorEnums";

import './defaultDialogBox.css';

class DefaultDialogBox extends Component {
  state = {
    eventInfo: {},
  };
  componentDidMount() {
    const { events, activeEventId } = this.props;
    const eventInfo = events.filter(event => event.eventId === activeEventId);
    // const {
    //   eventName,
    //   eventDate,
    //   eventStartTime,
    //   eventLocation
    // } = eventInfo[0];
    // console.log(eventDate.substring(0, 10));
    // const dateMoment = moment(eventDate.substring(0, 10), 'YYYY-MM-DD');
    // const timeMoment = moment(eventStartTime, 'HH:mm:ss');
    this.setState({
      eventInfo: eventInfo[0]
    });
  }
  performAction = () => {
    const { actionType, close } = this.props;
    switch (actionType) {
      case 'delete':
        this.performDelete();
        break;

      case 'publish':
        this.performPublish();
        break;
      case 'approve':
        this.performApprove();
        break;
      case 'reject':
        this.performReject();
        break;
      case 'rollback':
        this.performRollback();
        break;

      default:
        break;
    }
    // alert('publish event');
    close();
  };

  performDelete = () => {
    const { deleteEvent, activeEventId } = this.props;
    deleteEvent(activeEventId);
    // alert('delete');
  };

  performPublish = () => {
    const { eventInfo } = this.state;
    const { updateEvent } = this.props;
    const modifiedEvent = {
      ...eventInfo,
      eventStatus: eventStatusEnums.PUBLISHED
    };
    // updateEvent(JSON.stringify(modifiedEvent));
    // console.log(modifiedEvent);
    updateEvent(modifiedEvent);
    // alert('piblish');
  }

  performApprove = () => {
    // alert('approve');
    const { eventInfo } = this.state;
    const { updateEvent, user } = this.props;
    let approvedCounter = 0;
    let modifiedEvent = {};
    const inspectorDetails = eventInfo.eventInspectorDetails.map((info) => {
      if (info.status === eventInspectorEnums.APPROVED) {
        approvedCounter++;
      }
      console.log(info.designation);
      console.log(user);
      if (info.designation === user) {
        return {
          ...info,
          status: eventInspectorEnums.APPROVED
        };
      }
      else {
        return info;
      }
    });

    // console.log(approvedCounter);
    // console.log(eventInfo);
    if (approvedCounter < 2) {
      modifiedEvent = {
        ...eventInfo,
        eventInspectorDetails: inspectorDetails
      }
    }
    else {
      modifiedEvent = {
        ...eventInfo,
        eventStatus: eventStatusEnums.CONFIRMED,
        eventInspectorDetails: inspectorDetails
      }
    }
    // console.log(modifiedEvent);
    // updateEvent(JSON.stringify(modifiedEvent));
    updateEvent(modifiedEvent);

  }

  performReject = () => {
    const { eventInfo } = this.state;
    const { updateEvent } = this.props;

    const modifiedEvent = {
      ...eventInfo,
      eventStatus: eventStatusEnums.REJECTED
    }
    // console.log(modifiedEvent);
    // updateEvent(JSON.stringify(modifiedEvent));
    // console.log(modifiedEvent);
    updateEvent(modifiedEvent);
    // alert('reject');
  }

  performRollback = () => {
    const { eventInfo } = this.state;
    const { updateEvent } = this.props;
    const inspectorDetails = eventInfo.eventInspectorDetails.map((info) => ({
      ...info,
      status: eventInspectorEnums.PENDING
    }));
    // const inspectorDetails = updateEvent.eventInspectorDetails((info) => ({
    //   name: info.name,
    //   designation: info.designation,
    //   status: eventInspectorEnums.PENDING
    // }))
    const modifiedEvent = {
      ...eventInfo,
      eventStatus: eventStatusEnums.PENDING,
      eventInspectorDetails: inspectorDetails,

    }

    // updateEvent(JSON.stringify(modifiedEvent));
    // console.log(modifiedEvent);
    updateEvent(modifiedEvent);
    // alert('rollback');
  }

  render() {
    const { eventName, eventDate, eventStartTime, eventLocation } = this.state.eventInfo;
    const { actionType } = this.props;
    const dateMoment = moment(eventDate, 'YYYY-MM-DD');
    const timeMoment = moment(eventStartTime, 'kk:mm')
    let actionButtonVariant = '';
    if (actionType === 'reject' || actionType === 'delete') {
      actionButtonVariant = 'danger';
    }
    else if (actionType === 'rollback') {
      actionButtonVariant = 'warning';
    }
    else {
      actionButtonVariant = 'success';
    }
    return (
      <React.Fragment>
        <Card className="text-center" id="defaultDialogMainCard">
          {/* <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
            DELETE EVENT
        </Card.Header> */}
          <Card.Body>
            <Card.Text>
              <Row className="topTextRow">
                <FontAwesomeIcon icon={faCheckDouble} className="fefaultIcon" />
                <span id="topText">
                  {' '}
                  Are you sure you want to {actionType} this event ?
                </span>
              </Row>
              <Row id="eventInfoRow">
                <Col xs lg="3">
                  <FontAwesomeIcon
                    size="4x"
                    icon={faCalendarTimes}
                    className="far fa-calendar-times"
                  />
                </Col>
                <Col md="auto">
                  <div>
                    <h6>{eventName}</h6>
                    <h6>{dateMoment.format('Do MMMM')}</h6>
                    <h6>
                      {timeMoment.format('h:mm A')}
                      <span> &nbsp; onwards </span>
                    </h6>
                    <h6>@ &nbsp; {eventLocation}</h6>
                  </div>
                </Col>
              </Row>
              <Row id="buttonRow">
                <Button
                  onClick={this.performAction}
                  variant={actionButtonVariant}
                  id="defaultBtn"
                  size="lg"
                // style={{ marginLeft: 5 }}
                >
                  {actionType}
                </Button>
                <Button variant="outline-secondary" size="lg" onClick={this.props.close}>
                  {' '}
                  cancel{' '}
                </Button>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  events: state.dashboard.events,
  activeEventId: state.dashboard.selectedEventId,
  user: state.auth.user.designtion
});

export default connect(
  mapStateToProps,
  { deleteEvent, updateEvent }
)(DefaultDialogBox);
