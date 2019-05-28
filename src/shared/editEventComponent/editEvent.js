import React, { Component } from 'react';
import { connect } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import './editEvent.css';

import * as moment from 'moment';
import { updateEvent } from '../../store/actions/DashBoardActions';
// import { isNull } from 'util';
// import sampleData from '../../services/sampleDataSet';
// import sampleDataSet from '../../services/sampleDataSet';

class EditEvent extends Component {
  sampleEvent = {
    eventId: 162,
    eventName: 'Exposition2030',
    eventDate: '2019-05-15',
    eventStartTime: '08:00',
    eventEndTime: '11:00',
    eventStatus: 'PENDING',
    eventLocation: 'DIM',
    eventOrganizer: '1',
    eventCoordinatorDetails: [
      {
        imNumber: '',
        name: '',
        coordinatorUId: 163333
      },
      {
        imNumber: '',
        name: '',
        coordinatorUId: 163334
      }
    ],
    eventInspectorDetails: [
      {
        inspecEventId: 164,
        name: 'Ruwan Perera',
        userId: 12,
        designation: 'HOD',
        status: 'PENDING'
      },
      {
        inspecEventId: 165,
        name: 'Dilani Perera',
        userId: 22,
        designation: 'SENIOR_TREASURER',
        status: 'APPROVED'
      },
      {
        inspecEventId: 166,
        name: 'Akalanka Perera',
        userId: 2,
        designation: 'PRESIDENT',
        status: 'APPROVED'
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis lacus in risus gravida lobortis sed vel ex. Aliquam non tincidunt odio. Donec ac feugiat eros. Donec molestie iaculis euismod.',
    eventCreatedAt: '2019-05-11T07:53:20.000+0000',
    eventUpdatedAt: '2019-05-27T08:43:30.000+0000'
  };
  state = {
    validated: false,
    showTimeAlert: false,
    showDateAlert: false,
    event: this.sampleEvent
    // eventId: '',
    // eventName: 'im cricket match',
    // venue: 'saibe grounds',
    // timeFrom: '10:45',
    // timeTo: '14:45',
    // eventStatus: '',
    // batch: '1',
    // date: '2019-04-29',
    // eventInspectorDetails: [],
    // // coordinatorName: '',
    // // coordinatorImnum: '',
    // // validated: false,
    // coordinators: [
    //   {
    //     coordinatorUId: '',
    //     name: 'dinith',
    //     imNumber: 'IM/2014/034'
    //   },
    //   {
    //     coordinatorUId: '',
    //     name: 'charinda',
    //     imNumber: 'IM/2014/035'
    //   }
    // ],

    // description: 'sample description',
    // participants: 'all 4 batches , acadamic staff',
    // budget: 30000,
    // resources: 'huts , cricket equickments',
    // eventCreatedAt: '',
    // eventUpdatedAt: ''
  };
  // EventInfo = [];

  componentDidMount() {
    const { selectedEventId, events } = this.props;
    const EventInfo = events.filter(event => event.eventId === selectedEventId);
    this.setState({
      event: EventInfo[0]
    });
  }

  updateEventClicked = e => {
    console.log('running');
    const { event } = this.state;
    const { updateEvent } = this.props;

    const timeFromMoment = moment(event.eventStartTime, 'HH:mm');
    const timeToMoment = moment(event.eventEndTime, 'HH:mm');
    const dateMoment = moment(event.eventDate, 'YYYY-MM-DD');



    // console.log(newEvent);
    if (timeToMoment.isBefore(timeFromMoment)) {
      this.setState({
        showTimeAlert: true
      });
      e.preventDefault();
      e.stopPropagation();
      // alert('incorrect time');
    } else if (dateMoment.isBefore(moment.now())) {
      this.setState({
        showDateAlert: true
      });
      e.preventDefault();
      e.stopPropagation();
    } else {



      updateEvent(event);
      // getMonthlyEvents({
      //   month: moment().month() + 1,
      //   year: moment().year()
      // });
      e.preventDefault();
      e.stopPropagation();
      this.props.close();
    }
  };

  // capturing the value changes in the input field  : dj

  onNameChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventName: e.target.value
      }
    });
  };

  onVenueChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventLocation: e.target.value
      }
    });
  };

  onTimeFromChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventStartTime: e.target.value
      }
    });
  };

  onTimeToChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventEndTime: e.target.value
      }
    });
  };

  onDateChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventDate: e.target.value
      }
    });
  };

  onCoordinatorNamechange = (e, id) => {
    // console.log(id);
    // console.log(e.target.value);
    const { event } = this.state;
    let coordinators = [];
    if (id === 0) {
      coordinators = [
        {
          coordinatorUId: event.eventCoordinatorDetails[0].coordinatorUId,
          name: e.target.value,
          imNumber: event.eventCoordinatorDetails[0].imNumber
        },
        event.eventCoordinatorDetails[1]
      ];
      // this.setState({
      //   coordinators: [
      //     {
      //       coordinatorUId: this.state.coordinators[0].coordinatorUId,
      //       name: event.target.value,
      //       imNumber: this.state.coordinators[0].imNumber
      //     },
      //     this.state.coordinators[1]
      //   ]
      // });
    } else {
      if (event.eventCoordinatorDetails[1] === undefined) {
        // let imNumber = event.eventCoordinatorDetails[1] ? event.eventCoordinatorDetails[1].imNumber : '';
        coordinators = [
          event.eventCoordinatorDetails[0],
          {
            //   coordinatorUId: event.eventCoordinatorDetails[1].coordinatorUId,
            name: e.target.value,
            imNumber: ''
          }
        ];
      }
      else {
        let imNumber = event.eventCoordinatorDetails[1].imNumber ? event.eventCoordinatorDetails[1].imNumber : '';
        coordinators = [
          event.eventCoordinatorDetails[0],
          {
            coordinatorUId: event.eventCoordinatorDetails[1].coordinatorUId,
            name: e.target.value,
            imNumber: imNumber
          }
        ];
      }
    }

    // this.setState({
    //   coordinators: [
    //     this.state.coordinators[0],
    //     {
    //       coordinatorUId: this.state.coordinators[1].coordinatorUId,
    //       name: event.target.value,
    //       imNumber: this.state.coordinators[1].imNumber
    //     }
    //   ]
    // });

    this.setState({
      event: {
        ...event,
        eventCoordinatorDetails: coordinators
      }
    });
  };

  onCoordinatorImnumChange = (e, id) => {
    const { event } = this.state;
    var coordinators = [];
    if (id === 0) {
      coordinators = [
        {
          coordinatorUId: event.eventCoordinatorDetails[0].coordinatorUId,
          name: event.eventCoordinatorDetails[0].name,
          imNumber: 'IM/' + e.target.value
        },
        event.eventCoordinatorDetails[1]
      ];
      // this.setState({
      //   coordinators: [
      //     {
      //       coordinatorUId: this.state.coordinators[0].coordinatorUId,
      //       name: this.state.coordinators[0].name,
      //       imNumber: 'IM/' + event.target.value
      //     },
      //     this.state.coordinators[1]
      //   ]
      // });
    } else {
      if (event.eventCoordinatorDetails[1] === undefined) {
        let name = event.eventCoordinatorDetails[1].name ? event.eventCoordinatorDetails[1].name : '';
        coordinators = [
          event.eventCoordinatorDetails[0],
          {
            // coordinatorUId: event.eventCoordinatorDetails[1].coordinatorUId,
            name: name,
            imNumber: 'IM/' + e.target.value
          }
        ];
      }
      else {
        let name = event.eventCoordinatorDetails[1].name ? event.eventCoordinatorDetails[1].name : '';
        coordinators = [

          event.eventCoordinatorDetails[0],
          {
            coordinatorUId: event.eventCoordinatorDetails[1].coordinatorUId,
            name: name,
            imNumber: 'IM/' + e.target.value
          }
        ];
      }

      // this.setState({
      //   coordinators: [
      //     this.state.coordinators[0],
      //     {
      //       coordinatorUId: this.state.coordinators[1].coordinatorUId,
      //       name: this.state.coordinators[1].name,
      //       imNumber: 'IM/' + event.target.value
      //     }
      //   ]
      // });
    }
    this.setState({
      event: {
        ...event,
        eventCoordinatorDetails: coordinators
      }
    });
  };

  onBatchchange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventOrganizer: e.target.value
      }
    });
  };

  onDescrptionChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventDescription: e.target.value
      }
    });
  };

  onPartcipantsChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventParticipants: e.target.value
      }
    });
  };

  onBudgetChange = e => {
    const { event } = this.state;
    this.setState({
      event: {
        ...event,
        eventBudget: e.target.value
      }
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
      eventLocation,
      eventStartTime,
      eventEndTime,
      eventDate,
      eventCoordinatorDetails,
      eventDescription,
      eventParticipants,
      eventBudget,
      eventOrganizer
      // resources
    } = this.state.event;
    // console.log(sampleDataSet);
    console.log(eventCoordinatorDetails[0]);
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
                        value={eventLocation}
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
                            value={eventStartTime}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="time"
                            onChange={this.onTimeToChange}
                            required
                            value={eventEndTime}
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
                        value={eventDate}
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
                        value={eventBudget}
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
                            onChange={e => this.onCoordinatorNamechange(e, 0)}
                            required
                            value={
                              eventCoordinatorDetails[0]
                                ? eventCoordinatorDetails[0].name
                                : ''
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
                                this.onCoordinatorImnumChange(event, 0)
                              }
                              required
                              value={
                                eventCoordinatorDetails[0]
                                  ? eventCoordinatorDetails[0].imNumber.substring(
                                    3
                                  )
                                  : ''
                              }
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
                              eventCoordinatorDetails[1]
                                ? eventCoordinatorDetails[1].name
                                : ''
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
                                eventCoordinatorDetails[1]
                                  ? eventCoordinatorDetails[1].imNumber.substring(
                                    3
                                  )
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
                        value={eventOrganizer}
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
                        value={eventDescription}
                      />
                    </Form.Group>

                    {/* Participants*/}

                    <Form.Group controlId="formBasicParticipants">
                      <Form.Label>Participants</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={this.onPartcipantsChange}
                        required
                        value={eventParticipants}
                      />
                    </Form.Group>

                    {/* Resources Allocations*/}

                    {/* <Form.Group controlId="formBasicResources">
                          <Form.Label>Resources Allocations</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={this.onResourceChange}
                            required
                            value={resources}
                          />
                        </Form.Group> */}
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
