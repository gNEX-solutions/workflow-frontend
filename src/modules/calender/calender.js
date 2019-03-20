import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import ApprovalSection from "../../shared/approval_section/approvalSectionComponent";
import { Row, Container, Col } from "react-bootstrap";
class CalenderSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

        <Row>
          <HeaderComponent />
        </Row>
        <Row className="cal_row" >
          <MainMenuCompoannent />
        </Row>
        <Row className="cal_row" >

          <MainMenuCompoannent />


        </Row>
        <Row>
          <Col className="col-4" id="calender_section">
            {/* <ApprovalSection></ApprovalSection> */}
          </Col>
          <Col className="col-8" id="event_description">
            <ApprovalSection></ApprovalSection>
          </Col>
        </Row>
        {/* <Row>
            <p> header 1</p>
          </Row> */}




      </React.Fragment>
    );
  }
}

export default CalenderSection;
