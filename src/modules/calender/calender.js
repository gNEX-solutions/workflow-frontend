import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import ApprovalSection from "../../shared/approval_section/approvalSectionComponent";
import { Row, Container, Col, Overlay, Popover } from "react-bootstrap";
import UserProfileSection from "../../shared/userProfileSection/userProfileSection";
import NotificationPannel from "../../shared/header/NotificationPanel";
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

        <Row>
          <HeaderComponent onProfClick={this.handleProfClick} />
          <Overlay
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
          >
            <Popover id="popover-contained" title="Popover bottom">
              <div>
                <NotificationPannel></NotificationPannel>
              </div>

            </Popover>
          </Overlay>
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
