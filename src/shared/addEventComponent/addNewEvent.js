import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form } from 'react-bootstrap';
import './newEvent.css';

import { createEvent } from '../../store/actions/DashBoardActions';

class addNewEvent extends Component {
  state = {
    eventName: '',
    venue: '',
    timeFrom: null,
    timeTo: null,
    date: null,
    coordinators: '',
    description: '',
    participants: '',
    budget: '',
    resources: ''
  };

  createEventClicked = () => {
    const {
      eventName,
      venue,
      timeFrom,
      timeTo,
      date,
      coordinators,
      description,
      participants,
      budget,
      resources
    } = this.state;

    const newEvent = {
      eventName: eventName,
      eventDate: '2019-05-15 14:40:02',
      eventStartTime: '08:00:00',
      eventEndTime: '11:00:00',
      eventStatus: 'OK',
      eventLocation: venue,
      eventCoordinatorDetails: [
        {
          imNumber: 'IM/2019/043',
          name: 'kasun'
        }
      ],
      eventParticipants: 'ALL',
      eventBudget: budget,
      eventDescription: description,
      eventApprovedStatus: 'OK',
      eventCreatedAt: '2019-02-15T09:10:02.000+0000',
      eventUpdatedAt: '2019-02-15T09:10:02.000+0000'
    };

    console.log(newEvent);
    const { createEvent } = this.props;
    createEvent(newEvent);

    this.props.onCancel();
  };

  // capturing the value changes in the input field  : dj

  onNameChange = event => {
    this.setState({
      eventName: event.target.value
    });
  };

  onVenueChange = event => {
    this.setState({
      venue: event.target.value
    });
  };

  onTimeFromChange = event => {
    this.setState({
      timeFrom: event.target.value
    });
  };

  onTimeToChange = event => {
    this.setState({
      timeTo: event.target.value
    });
  };

  onDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  onCoordinatorschange = event => {
    this.setState({
      coordinators: event.target.value
    });
  };

  onDescrptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  onPartcipantsChange = event => {
    this.setState({
      participants: event.target.value
    });
  };

  onBudgetChange = event => {
    this.setState({
      budget: event.target.value
    });
  };

  onResourceChange = event => {
    this.setState({
      resources: event.target.value
    });
  };
  // end of caturing the value changes in the input fields
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Row className="row">
            <Col className="col-sm-12 col-md-12">
              {/* moved the header to the model header : dj 
                                <div className="card-header">
                                    <strong>{this.title}</strong>
                                </div>   */}

              {/* <div className="card-body"> */}
              <Form method="#">
                <Row className="row">
                  <Col className="col-sm-6 col-md-6">
                    {/* Event name*/}

                    <Form.Group controlId="formBasicEventName">
                      <Form.Label>Event name</Form.Label>
                      <Form.Control type="text" onChange={this.onNameChange} />
                    </Form.Group>
                    {/* Venue*/}

                    <Form.Group controlId="formBasicVenue">
                      <Form.Label>Venue</Form.Label>
                      <Form.Control type="text" onChange={this.onVenueChange} />
                    </Form.Group>

                    {/* Time*/}

                    <Form.Group controlId="formBasicTime">
                      <Form.Label>Time</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeFromChange}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeToChange}
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    {/* Planned date*/}

                    <Form.Group controlId="formBasicDate">
                      <Form.Label>Planned Date</Form.Label>
                      <Form.Control
                        type="date"
                        ref="date"
                        onChange={this.onDateChange}
                      />
                    </Form.Group>

                    {/* Coodinators*/}

                    <Form.Group controlId="formBasicCoordinators">
                      <Form.Label>Coordinators</Form.Label>
                      <Form.Control
                        as="textarea"
                        onChange={this.onCoordinatorschange}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-sm-6 col-md-6">
                    {/* Description*/}

                    <Form.Group controlId="formBasicDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        onChange={this.onDescrptionChange}
                      />
                    </Form.Group>

                    {/* Participants*/}

                    <Form.Group controlId="formBasicParticipants">
                      <Form.Label>Participants</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onPartcipantsChange}
                      />
                    </Form.Group>

                    {/* Budget*/}

                    <Form.Group controlId="formBasicBudget">
                      <Form.Label>Budget</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={this.onBudgetChange}
                      />
                    </Form.Group>
                    {/* Resources Allocations*/}

                    <Form.Group controlId="formBasicResources">
                      <Form.Label>Resources Allocations</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onResourceChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button
                    id="btnAdd_form"
                    className="btn btn-success"
                    onClick={this.createEventClicked}
                  >
                    {' '}
                    Create Event{' '}
                  </Button>
                  <Button
                    id="btnCancel_form"
                    className="btn-danger"
                    onClick={this.props.onCancel}
                  >
                    Cancel
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createEvent }
)(addNewEvent);
