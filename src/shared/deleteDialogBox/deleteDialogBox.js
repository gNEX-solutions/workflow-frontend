import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faCalendarTimes
} from '@fortawesome/free-solid-svg-icons';

import './deleteDialogBoX.css';

class DeleteDialogBox extends Component {
  state = {
    eventName: 'CSR Project',
    eventDate: '26th January',
    eventTime: '9 am',
    eventVenue: 'Apeksha Hospital'
  };

  deleteEvent = () => { };
  render() {
    return (
      <React.Fragment>
        <Card className="text-center" id="deleteDialogMainCard">
          {/* <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
            DELETE EVENT
        </Card.Header> */}
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="single_tick"
                    />
                    <span>  Are you sure you want to delete this event</span>
                  </h6>
                </Col>
              </Row>
              <Row>
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
              <Row>
                <Col>
                  <Button variant="light" onClick={this.props.close} > cancel </Button>

                  <Button
                    onClick={this.deleteEvent}
                    variant="danger"
                    style={{ marginLeft: 5 }}
                  >
                    delete
                </Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeleteDialogBox;
