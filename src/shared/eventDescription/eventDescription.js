import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./eventDescription.css";

class EventDescription extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="header_container">
          <Row id="header_row">
            <Col className="col-3">
              <h3 id="event_name">IM Cricket Match </h3>
            </Col>

            <Col className="col-1">
              <p id="date"> 11th Jan</p>
            </Col>
            <Col className="col-2">
              <p id="time"> 10 A.M onwards </p>
            </Col>
            <Col className="col-2">
              <p id="venue"> Saibe grounds</p>
            </Col>
          </Row>
          <hr size="20" />
          <div id="basic_info">
            <Row id="basic_info_row">
              <Col className="col-4">
                <p>
                  {" "}
                  <strong>Organised by</strong> : Year 1{" "}
                </p>
              </Col>
              <Col id="Coordinator" className="col-4">
                <p>
                  {" "}
                  <strong>Coordinators</strong> : Dinith Jayabodhi{" "}
                </p>
              </Col>
              <p>
                {" "}
                <strong>Participants</strong> : All years{" "}
              </p>
              <Col className="col-4" />
            </Row>

            <Row id="description_row">
              <p id="description">
                {" "}
                <strong>Description </strong>
              </p>
              <p id="detailed_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                risus neque, suscipit luctus eros eu, suscipit malesuada felis.
                Donec convallis aliquet urna, quis lacinia eros volutpat nec.
                Integer faucibus nunc nec sagittis mattis. Nam nulla tortor,
                lobortis sit amet efficitur nec, varius eu elit. Integer vel
                viverra massa, a ultrices nulla. Duis risus enim, imperdiet ut
                odio vel, ultrices posuere.
              </p>
              {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sapien sit amet porttitor condimentum. Curabitur aliquet ipsum arcu. Etiam consectetur odio non erat mollis, sit amet aliquam nibh faucibus. Aenean velit erat, eleifend sed risus eu, pharetra consectetur nulla. Quisque vitae lorem nec turpis pretium facilisis id sed leo. Nulla ac consequat ipsum. Praesent tincidunt turpis lobortis enim auctor.
                        </p> */}
            </Row>

            <Row id="footer">
              <Col className="col-8" />
              <Col className="col-4">
                <p>
                  {" "}
                  <strong id="description"> Budget </strong> : Rs 25 000
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
