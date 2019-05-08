import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import './editEvent.css';

import * as moment from 'moment';
import { updateEvent } from '../../store/actions/DashBoardActions';
// import sampleData from '../../services/sampleDataSet';
// import sampleDataSet from '../../services/sampleDataSet';

class EditEvent extends Component {
  state = {
    validated: false,
    showTimeAlert: false,
    showDateAlert: false,
    eventId: '',
    eventName: 'im cricket match',
    venue: 'saibe grounds',
    timeFrom: '10:45',
    timeTo: '14:45',
    eventStatus: '',
    batch: '1',
    date: '2019-04-29',
    // coordinatorName: '',
    // coordinatorImnum: '',
    // validated: false,
    coordinators: [
      {
        name: 'dinith',
        imNumber: 'IM/2014/034'
      },
      {
        name: 'charinda',
        imNumber: 'IM/2014/035'
      }
    ],

    description: 'sample description',
    participants: 'all 4 batches , acadamic staff',
    budget: 30000,
    resources: 'huts , cricket equickments'
  };
  // EventInfo = [];

  componentDidMount() {
    const { selectedEventId, events } = this.props;
    const EventInfo = events.filter(event => event.eventId === selectedEventId);
    let coordinatorInfo = [];
    // console.log(EventInfo);
    const {
      eventId,
      eventName,
      eventLocation,
      eventStartTime,
      eventEndTime,
      eventDate,
      eventStatus,
      eventCoordinatorDetails,
      eventParticipants,
      eventBudget,
      eventDescription
    } = EventInfo[0];
    coordinatorInfo = eventCoordinatorDetails.map(coordinator => ({
      name: coordinator.name,
      imNumber: coordinator.imNumber
    }));
    if (!coordinatorInfo[1]) {
      coordinatorInfo.push({
        name: '',
        imNumber: ''
      });
    }

    this.setState({
      eventId: eventId,
      eventName: eventName,
      venue: eventLocation,
      timeFrom: eventStartTime.substring(0, 5),
      timeTo: eventEndTime.substring(0, 5),
      date: eventDate.substring(0, 10),
      eventStatus: eventStatus,
      coordinators: coordinatorInfo,

      description: eventDescription,
      participants: eventParticipants,
      budget: eventBudget
    });
  }

  updateEventClicked = event => {
    console.log('running');

    const {
      eventId,
      eventName,
      venue,
      timeFrom,
      timeTo,
      eventStatus,
      date,
      coordinators,
      description,
      participants,
      budget,
      batch,
      resources
    } = this.state;
    const timeFromMoment = moment(timeFrom, 'HH:mm');
    const timeToMoment = moment(timeTo, 'HH:mm');
    const dateMoment = moment(date, 'YYYY-MM-DD');

    const newEvent = {
      eventId: eventId,
      eventName: eventName,
      eventDate: date,
      eventStartTime: timeFrom,
      eventEndTime: timeTo,
      eventStatus: eventStatus,
      eventLocation: venue,
      eventBatch: batch,
      eventCoordinatorDetails: [
        {
          imNumber: coordinators[0].imNumber,
          name: coordinators[0].name
        },
        {
          imNumber: coordinators[1].imNumber,
          name: coordinators[1].name
        }
      ],
      eventParticipants: participants,
      eventBudget: budget,
      eventDescription: description
      // eventApprovedStatus: this.EventInfo[0].eventApprovedStatus,
      // eventCreatedAt: this.EventInfo[0].eventCreatedAt,
      // eventUpdatedAt: this.EventInfo[0].eventUpdatedAt
    };

    console.log(newEvent);
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
    } else {
      const { updateEvent } = this.props;

      updateEvent(JSON.stringify(newEvent));
      // event.preventDefault();
      // event.stopPropagation();
      this.props.close();
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
            name: this.state.coordinators[1].name,
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
    const { validated } = this.state;
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
      batch,
      resources
    } = this.state;
    // console.log(sampleDataSet);
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
                onSubmit={event => this.updateEventClicked(event)}
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
                        value={eventName}
                      />
                    </Form.Group>
                    {/* Venue*/}

                    <Form.Group controlId="formBasicVenue">
                      <Form.Label>Venue</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onVenueChange}
                        required
                        value={venue}
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
                            value={timeFrom}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeToChange}
                            required
                            value={timeTo}
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
                        value={date}
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
                        value={budget}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-sm-6 col-md-6">
                    {/* coordinators*/}

                    <Form.Group controlId="formBasicCoordinators">
                      <Form.Label>Coordinators</Form.Label>
                      {/* {this.getCoordinators()} */}
                      <Row className="coordinator_row">
                        <Col className="col-6">
                          <Form.Control
                            type="text"
                            placeholder="name"
                            onChange={event =>
                              this.onCoordinatorNamechange(event, 0)
                            }
                            required
                            value={coordinators[0].name}
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
                              value={coordinators[0].imNumber.substring(3)}
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
                            value={
                              coordinators[1].name ? coordinators[1].name : ''
                            }
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
                              value={
                                coordinators[1].imNumber
                                  ? coordinators[1].imNumber.substring(3)
                                  : ''
                              }
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Form.Group>

                    {/* batch  */}

                    <Form.Group controlId="formBasicBatch">
                      <Form.Label>Batch</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={this.onBatchchange}
                        value={batch}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Control>
                    </Form.Group>

                    {/* description*/}
                    <Form.Group controlId="formBasicDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        onChange={this.onDescrptionChange}
                        value={description}
                      />
                    </Form.Group>

                    {/* Participants*/}

                    <Form.Group controlId="formBasicParticipants">
                      <Form.Label>Participants</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onPartcipantsChange}
                        required
                        value={participants}
                      />
                    </Form.Group>

                    {/* Resources Allocations*/}

                    <Form.Group controlId="formBasicResources">
                      <Form.Label>Resources Allocations</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onResourceChange}
                        required
                        value={resources}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button
                    id="btnEdit_form"
                    type="submit"
                    className="btn btn-success"
                    onClick={this.updateEventClicked}
                  >
                    {' '}
                    Edit Event{' '}
                  </Button>
                  <Button
                    id="btnCancel_form"
                    className="btn-danger"
                    onClick={this.props.close}
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
const mapStateToProps = state => ({
  events: state.dashboard.events,
  selectedEventId: state.dashboard.selectedEventId
});

export default connect(
  mapStateToProps,
  { updateEvent }
)(EditEvent);
