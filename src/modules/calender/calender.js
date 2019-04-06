
import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import ApprovalSection from "../../shared/approval_section/approvalSectionComponent";
import { Row, Col } from "react-bootstrap";
import EventDescription from "../../shared/eventDescription/eventDescription";
import CalenderFooter from "../../shared/calenderFooter/calenderFooter";
import CalenderComponent from "../../shared/calenderComponent/calenderComponent"
import "./calender.css";

class CalenderSection extends Component {
  state = {
    showUserProfile: false,
    showNotificationPannel: false
  };
  // added by dj: 20/03/2019 : handling the state of the user profile section
  handleProfClick = () => {
    this.setState({
      showUserProfile: !this.state.showUserProfile
    });
  };
  render() {
    return (
      <React.Fragment>
        {/* <Row> */}

        {/* <Overlay
            show={this.state.showUserProfile}
            placement="bottom-end"
            target={this}
            container={this}
            containerPadding={20}
          >
            <Popover id="popover-contained" title="Popover bottom">
              <UserProfileSection></UserProfileSection>
            </Popover>
          </Overlay>
          <Overlay
            show={this.state.showNotificationPannel}
            placement="bottom-end"
            target={this}
            container={this}
            containerPadding={2}
          > */}
        {/* <Popover id="popover-contained" title="Popover bottom">
              <div>
                <NotificationPannel></NotificationPannel>
              </div>

            </Popover>
          </Overlay> */}
        {/* </Row> */}
        {/* <Row className="cal_row" >
          <MainMenuCompoannent />
        </Row> */}
        <Row>
          <Col className="col-4" id="calender_section">
            <CalenderComponent />
          </Col>
          <Col className="col-8" id="event_info">
            <Row id="event_description_row">
              <EventDescription id="event_description" />
            </Row>
            <Row id="app_section_row">
              <ApprovalSection id="app_section" />
            </Row>
            <Row>
              <CalenderFooter id="cal_footer" />
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
