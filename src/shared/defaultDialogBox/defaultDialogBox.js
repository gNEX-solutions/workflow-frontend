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

import './defaultDialogBox.css';

class DefaultDialogBox extends Component {
  state = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventVenue: ''
  };
  componentDidMount() {
    const { events, activeEventId } = this.props;
    const eventInfo = events.filter(event => event.eventId === activeEventId);
    const {
      eventName,
      eventDate,
      eventStartTime,
      eventLocation
    } = eventInfo[0];
    // console.log(eventDate.substring(0, 10));
    const dateMoment = moment(eventDate.substring(0, 10), 'YYYY-MM-DD');
    const timeMoment = moment(eventStartTime, 'HH:mm:ss');
    this.setState({
      eventName: eventName,
      eventDate: dateMoment.format('Do MMMM'),
      eventTime: timeMoment.format('HH:mm A'),
      eventVenue: eventLocation
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
    alert('delete');
  };

  performPublish = () => {
    alert('piblish');
  }

  performApprove = () => {
    alert('approve');
  }

  performReject = () => {
    alert('reject');
  }

  performRollback = () => {
    alert('rollback');
  }

  render() {
    const { eventName, eventDate, eventTime, eventVenue } = this.state;
    const { actionType } = this.props;
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
                    <h6>{eventDate}</h6>
                    <h6>
                      {eventTime}
                      <span> &nbsp; onwards </span>
                    </h6>
                    <h6>@{eventVenue}</h6>
                  </div>
                </Col>
              </Row>
              <Row id="buttonRow">
                <Button
                  onClick={this.performAction}
                  variant={actionButtonVariant}
                  id="defaultBtn"
                // style={{ marginLeft: 5 }}
                >
                  {actionType}
                </Button>
                <Button variant="dark" onClick={this.props.close}>
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
  activeEventId: state.dashboard.selectedEventId
});

export default connect(
  mapStateToProps,
  {}
)(DefaultDialogBox);
