import React, { Component } from "react";
import HeaderComopnet from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import { Row } from 'react-bootstrap'
class EventExplorer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <header> event explorere section </header> */}
        <HeaderComopnet />
        <Row>
          <MainMenuCompoannent />
        </Row>
        <Row>
          <MainMenuCompoannent />
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
