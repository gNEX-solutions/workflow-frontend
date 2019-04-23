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
import SampleData from '../../services/sampleDataSet';

import './publishDialogBoX.css';

class PublishDialogBox extends Component {
  state = {
    eventName: 'CSR Project',
    eventDate: '26th January',
    eventTime: '9 am',
    eventVenue: 'Apeksha Hospital'
  };
  componentDidMount() {
    const eventInfo = SampleData.filter(event => event.eventId === 1);
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
  publishEvent = () => {
    alert('publish event');
    this.props.close();
  };
  render() {
    const { eventName, eventDate, eventTime, eventVenue } = this.state;
    return (
      <React.Fragment>
        <Card className="text-center" id="publishDialogMainCard">
          {/* <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
            DELETE EVENT
        </Card.Header> */}
          <Card.Body>
            <Card.Text>
              <Row className="topTextRow">
                <FontAwesomeIcon icon={faCheckDouble} className="publishIcon" />
                <span id="topText">
                  {' '}
                  Are you sure you want to publish this event ?
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
                  onClick={this.publishEvent}
                  variant="success"
                  id="publishBtn"
                // style={{ marginLeft: 5 }}
                >
                  Publish
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

export default PublishDialogBox;
