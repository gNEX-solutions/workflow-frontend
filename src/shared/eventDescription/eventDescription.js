import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './eventDescription.css';

class EventDescription extends Component {
  state = {};
  render() {
    const {
      eventName,
      eventDate,
      eventStartTime,
      eventLocation,
      eventParticipants,
      eventDescription,
      eventBudget
    } = this.props.event;

    return (
      <React.Fragment>
        <div id="header_container">
          <Row id="header_row">
            <Col className="col-3">
              <h3 id="event_name">{eventName} </h3>
            </Col>

            <Col className="col-1">
              <p id="date"> {eventDate}</p>
            </Col>
            <Col className="col-2">
              <p id="time"> {eventStartTime} </p>
            </Col>
            <Col className="col-2">
              <p id="venue">{eventLocation}</p>
            </Col>
          </Row>
          <hr size="20" />
          <div id="basic_info">
            <Row id="basic_info_row">
              <Col className="col-4">
                <p>
                  <strong>Organised by</strong> : Year 1
                </p>
              </Col>
              <Col id="Coordinator" className="col-4">
                <p>
                  <strong>Coordinators</strong> : Dinith Jayabodhi
                </p>
              </Col>
              <p>
                <strong>Participants</strong> : {eventParticipants}
              </p>
              <Col className="col-4" />
            </Row>

            <Row id="description_row">
              <p id="description">
                <strong>Description </strong>
              </p>
              <p id="detailed_description">{eventDescription}</p>
              {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sapien sit amet porttitor condimentum. Curabitur aliquet ipsum arcu. Etiam consectetur odio non erat mollis, sit amet aliquam nibh faucibus. Aenean velit erat, eleifend sed risus eu, pharetra consectetur nulla. Quisque vitae lorem nec turpis pretium facilisis id sed leo. Nulla ac consequat ipsum. Praesent tincidunt turpis lobortis enim auctor.
                        </p> */}
            </Row>

            <Row id="footer">
              <Col className="col-8" />
              <Col className="col-4">
                <p>
                  <strong id="description"> Budget </strong> : Rs {eventBudget}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventDescription;
