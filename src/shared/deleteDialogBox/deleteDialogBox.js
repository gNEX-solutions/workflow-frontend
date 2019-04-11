import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./deleteDialogBoX.css";

class DeleteDialogBox extends Component {
  state = {
    eventName: "CSR Project",
    eventDate: "26th January",
    eventTime: "9 am",
    eventVenue: "Apeksha Hospital"
  };

  deleteEvent = () => {};
  render() {
    return (
      <React.Fragment>
        <Card className="text-center">
          <Card.header>Delete Event</Card.header>
          <Card.Body>
            <Card.text>
              <h6>Are you sure you want to delete this event</h6>
              <Row>
                <Col>
                  <h6>{this.state.eventName}</h6>
                  <h6>{this.state.eventDate}</h6>
                  <h6>
                    {this.state.eventTime}
                    <p> onwards</p>
                  </h6>
                  <h6>@{this.state.eventVenue}</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary">No</Button>

                  <Button
                    onClick={this.deleteEvent}
                    variant="warning"
                    style={{ marginLeft: 5 }}
                  >
                    Yes
                  </Button>
                </Col>
              </Row>
            </Card.text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeleteDialogBox;
