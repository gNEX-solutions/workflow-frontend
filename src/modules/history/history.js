import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuComponent from "../../shared/mainMenu/mainMenu";
import { Row } from 'react-bootstrap'
class HistorySection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header> history section </header>
        <HeaderComponent />
        <Row>
          <MainMenuComponent />
        </Row>
      </React.Fragment>
    );
  }
}

export default HistorySection;
