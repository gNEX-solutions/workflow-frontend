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

import './publishDialogBoX.css';

class PublishDialogBox extends Component {
  state = {
    eventName: 'CSR Project',
    eventDate: '26th January',
    eventTime: '9 am',
    eventVenue: 'Apeksha Hospital'
  };

  publishEvent = () => {
    alert('publish event');
    this.props.close();
  };
  render() {
    return (
      <React.Fragment>
        <Card className="text-center" id="publishDialogMainCard">
          {/* <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
            DELETE EVENT
        </Card.Header> */}
          <Card.Body>
            <Card.Text>
              <Row className="topTextRow">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="publishIcon"
                />
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
                    <h6>{this.state.eventName}</h6>
                    <h6>{this.state.eventDate}</h6>
                    <h6>
                      {this.state.eventTime}
                      <span> </span>
                      onwards
                    </h6>
                    <h6>@{this.state.eventVenue}</h6>
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
