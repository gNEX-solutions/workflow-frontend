import React, { Component } from "react";
import HeaderComopnet from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import { Row } from 'react-bootstrap'
import './eventExplorer.css';
class EventExplorer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <header> event explorere section </header> */}
        <HeaderComopnet />
        <Row id="main_menu">
          <MainMenuCompoannent />
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
