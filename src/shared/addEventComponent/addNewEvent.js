import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Form, Card } from 'react-bootstrap';
import './newEvent.css';

class addNewEvent extends Component {
    state = {
        eventName: 'event one',
        venue: 'Venue',
        timeFrom: '08:00',
        timeTo: '17:00',
        date: '06/05/2016',
        coordinators: 'IM/2016/001',
        description: 'this will be the description',
        participants: 'lectures ',
        budget: '25000',
        resources: 'im lab'
    }
    title = 'ADD NEW EVENT';

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Row className="row">

                        {/* commented unnessary code : dj */}
                        {/* <Col className="col-sm-2 col-md-2">
                            <h1>test 01</h1>
                        </Col> */}

                        <Col className="col-sm-12 col-md-12">
                            {/* <Card> */}
                            {/* moved the header to the model header : dj 
                                <div className="card-header">
                                    <strong>{this.title}</strong>
                                </div>   */}

                            {/* <div className="card-body"> */}
                            <Form method="#">
                                <Row className="row">
                                    <Col className="col-sm-6 col-md-6">
                                        {/* Event name*/}
                                        {/* <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Event Name</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input type="text" id="#" name="#" className="form-control" value={this.state.eventName} />
                                            </Col>
                                        </Row> */}
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Event name</Form.Label>
                                            <Form.Control type="text" value={this.state.eventName} />
                                        </Form.Group>
                                        {/* Venue*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Venue</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input type="text" id="#" name="#" value={this.state.venue} className="form-control" />
                                            </Col>
                                        </Row>
                                        {/* Time*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Time</label>
                                            </Col>
                                            <Col className="col-12 col-md-4">

                                                <input type="time" id="#" name="#" value={this.state.timeFrom} className="form-control timepicker" />

                                            </Col>
                                            <Col className="col-12 col-md-4">
                                                <input type="time" id="#" name="#" value={this.state.timeTo} className="form-control timepicker" />
                                            </Col>
                                        </Row>
                                        {/* Planned date*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Planned Date</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input id="#" name="#" value={this.state.date} type="date" className="form-control" />
                                            </Col>

                                        </Row>
                                        {/* Coodinators*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Coordinators</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <textarea type="text" id="#" name="#" value={this.state.coordinators} className="form-control" ></textarea>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col className="col-sm-6 col-md-6">
                                        {/* Description*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Description</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <textarea type="text" value={this.state.description} id="#" name="#" className="form-control" ></textarea>
                                            </Col>
                                        </Row>
                                        {/* Participants*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Participants</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input type="text" id="#" name="#" value={this.state.participants} className="form-control" />
                                            </Col>
                                        </Row>
                                        {/* Budget*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Budget</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input type="text" id="#" name="#" value={this.state.budget} className="form-control" />
                                            </Col>
                                        </Row>
                                        {/* Resources Allocations*/}
                                        <Row className="position-relative row form-group">
                                            <Col className="col-md-3">
                                                <label for="text-input" >Resources Allocations</label>
                                            </Col>
                                            <Col className="col-12 col-md-9">
                                                <input type="text" id="#" name="#" value={this.state.resources} className="form-control" />
                                            </Col>
                                        </Row>


                                    </Col>
                                </Row>
                            </Form>

                            {/* end of card body */}
                            {/* </div> */}

                            {/* 
                                    moved to the model footer : dj
                                <div className="card-footer">
                                    <div className="div-action pull pull-right">
                                        <button  className="btnaddEvent btn btn-primary btn-sm">ADD </button>
                                       
                                    </div>
                                </div> */}

                            {/* </Card> */}
                        </Col>

                        {/* 
                            commented unnessary code : dj 
                        <Col className="col-sm-2 col-md-2">
                            <h1>test 03</h1>
                        </Col> */}

                    </Row>

                </div>

            </div>

        );
    }
}

export default addNewEvent;