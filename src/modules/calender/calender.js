import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import { Row } from "react-bootstrap";
class CalenderSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row>
          <header> calender section </header>
        </Row>

        <HeaderComponent />
        <MainMenuCompoannent />
      </React.Fragment>
    );
  }
}

export default CalenderSection;
