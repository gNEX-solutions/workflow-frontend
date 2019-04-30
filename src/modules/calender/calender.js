import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import ApprovalSection from "../../shared/approval_section/approvalSectionComponent";
import { Row, Col } from "react-bootstrap";
import EventDescription from "../../shared/eventDescription/eventDescription";
import CalenderFooter from "../../shared/calenderFooter/calenderFooter";
import "./calender.css";
class CalenderSection extends Component {
  state = {
    showUserProfile: false,
    showNotificationPannel: false,
  };
  // added by dj: 20/03/2019 : handling the state of the user profile section 
  handleProfClick = () => {
    this.setState({
      showUserProfile: !this.state.showUserProfile
    });
  }
  render() {
    return (
      <React.Fragment>

        {/* <Row> */}
        <HeaderComponent onProfClick={this.handleProfClick} />
        
        <Row className="cal_row" id="main_menu" >

        <MainMenuCompoannent />


        </Row>
        <Row>
          <Col className="col-4" id="calender_section">
            {/* <ApprovalSection></ApprovalSection> */}
          </Col>
          <Col className="col-8" id="event_info">
            <Row id="event_description_row">
              <EventDescription id="event_description"></EventDescription>
            </Row>
            <Row id="app_section_row">
              <ApprovalSection id="app_section"></ApprovalSection>
            </Row>
            <Row>
              <CalenderFooter id="cal_footer"></CalenderFooter>
            </Row>

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
