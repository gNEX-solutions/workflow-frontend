import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import './newEvent.css';

import { createEvent } from '../../store/actions/DashBoardActions';
import * as moment from 'moment';

class addNewEvent extends Component {
  state = {
    validated: false,
    showTimeAlert: false,
    showDateAlert: false,
    eventName: '',
    venue: '',
    timeFrom: null,
    timeTo: null,
    date: null,
    batch: null,
    // coordinatorName: '',
    // coordinatorImnum: '',
    coordinators: [
      {
        name: '',
        imNumber: ''
      },
      {
        name: '',
        imNumber: ''
      }
    ],

    description: '',
    participants: '',
    budget: ''
  };
  // sample added by dj
  createEventClicked = event => {
    // console.log('running');


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
      batch
    } = this.state;
    const timeFromMoment = moment(timeFrom, 'HH:mm');
    const timeToMoment = moment(timeTo, 'HH:mm');
    const dateMoment = moment(date, 'YYYY-MM-DD');

    const newEvent = {
      eventName: eventName,
      eventDate: date,
      eventStartTime: timeFrom,
      eventEndTime: timeTo,
      eventLocation: venue,
      eventCoordinatorDetails: coordinators,
      eventBatch: batch,
      eventParticipants: participants,
      eventBudget: budget,
      eventDescription: description
    };

    // console.log(timeFromMoment.isAfter(timeToMoment));
    if (timeToMoment.isBefore(timeFromMoment)) {
      this.setState({
        showTimeAlert: true
      });
      event.preventDefault();
      event.stopPropagation();
      // alert('incorrect time');
    } else if (dateMoment.isBefore(moment.now())) {
      this.setState({
        showDateAlert: true
      });
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      const { createEvent } = this.props;
      createEvent(newEvent);
      event.preventDefault();
      event.stopPropagation();
      this.props.onCancel();
    }
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

  onCoordinatorNamechange = (event, id) => {
    // console.log(id);
    if (id === 0) {
      this.setState({
        coordinators: [
          {
            name: event.target.value,
            imNumber: this.state.coordinators[0].imNumber
          },
          this.state.coordinators[1]
        ]
      });
    } else {
      this.setState({
        coordinators: [
          this.state.coordinators[0],
          {
            name: event.target.value,
            imNumber: this.state.coordinators[1].imNumber
          }
        ]
      });
    }
  };

  onCoordinatorImnumChange = (event, id) => {
    if (id === 0) {
      this.setState({
        coordinators: [
          {
            name: this.state.coordinators[0].name,
            imNumber: 'IM/' + event.target.value
          },
          this.state.coordinators[1]
        ]
      });
    } else {
      this.setState({
        coordinators: [
          this.state.coordinators[0],
          {
            name: this.state.coordinators[0].name,
            imNumber: 'IM/' + event.target.value
          }
        ]
      });
    }
    // this.setState({
    //     coordinatorImnum: 'IM/' + event.target.value
    //   });
  };

  onBatchchange = event => {
    // alert(event.target.value);
    this.setState({
      batch: event.target.value
    });
  }

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
    const { validated } = this.state;
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
              <Form
                method="#"
                validated={validated}
                onSubmit={event => this.createEventClicked(event)}
              >
                <Row className="row">
                  <Col className="col-sm-6 col-md-6">
                    {/* Event name*/}

                    <Form.Group controlId="formBasicEventName">
                      <Form.Label>Event name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onNameChange}
                        required
                      />
                    </Form.Group>
                    {/* Venue*/}

                    <Form.Group controlId="formBasicVenue">
                      <Form.Label>Venue</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onVenueChange}
                        required
                      />
                    </Form.Group>

                    {/* Time*/}

                    <Form.Group controlId="formBasicTime">
                      <Form.Label>Time</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeFromChange}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeToChange}
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Alert variant="danger" show={this.state.showTimeAlert}>
                      {' '}
                      starting time should before ending time
                    </Alert>

                    {/* Planned date*/}

                    <Form.Group controlId="formBasicDate">
                      <Form.Label>Planned Date</Form.Label>
                      <Form.Control
                        type="date"
                        ref="date"
                        onChange={this.onDateChange}
                        required
                      />
                    </Form.Group>
                    <Alert variant="danger" show={this.state.showDateAlert}>
                      {' '}
                      planned date should be after today
                    </Alert>


                    {/* Budget*/}

                    <Form.Group controlId="formBasicBudget">
                      <Form.Label>Budget</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={this.onBudgetChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-sm-6 col-md-6">
                    {/* coordinators*/}

                    <Form.Group controlId="formBasicCoordinators">
                      <Form.Label>Coordinators</Form.Label>
                      <Row className="coordinator_row">
                        <Col className="col-6">
                          <Form.Control
                            type="text"
                            placeholder="name"
                            onChange={event =>
                              this.onCoordinatorNamechange(event, 0)
                            }
                            required
                          />
                        </Col>
                        <Col className="col-6">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroupPrepend">
                                IM/
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder=" IM number"
                              pattern="[0-9/]{5,8}"
                              onChange={event =>
                                this.onCoordinatorImnumChange(event, 0)
                              }
                              required
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="coordinator_row">
                        <Col className="col-6">
                          <Form.Control
                            type="text"
                            placeholder="name"
                            onChange={event =>
                              this.onCoordinatorNamechange(event, 1)
                            }
                            required
                          />
                        </Col>
                        <Col className="col-6">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroupPrepend">
                                IM/
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder=" IM number"
                              pattern="[0-9/]{5,8}"
                              onChange={event =>
                                this.onCoordinatorImnumChange(event, 1)
                              }
                              required
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Form.Group>

                    {/* batch  */}

                    <Form.Group controlId="formBasicBatch">
                      <Form.Label>Batch</Form.Label>
                      <Form.Control as="select" onChange={this.onBatchchange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Control>
                    </Form.Group>


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
                        required
                      />
                    </Form.Group>

                    {/* Resources Allocations*/}

                    <Form.Group controlId="formBasicResources">
                      <Form.Label>Resources Allocations</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onResourceChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button
                    id="btnAdd_form"
                    type="submit"
                    className="btn btn-success"
                  // onClick={this.createEventClicked}
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
