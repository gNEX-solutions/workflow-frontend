import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import { Row } from "react-bootstrap";
class CalenderSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header> calender section </header>
        <HeaderComponent />
        <Row>
          <MainMenuCompoannent />
        </Row>

      </React.Fragment>
    );
  }
}

export default CalenderSection;
