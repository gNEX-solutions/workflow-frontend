import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HeaderComopnet from '../../shared/header/headerComponent';
import MainMenuCompoannent from '../../shared/mainMenu/mainMenu';
import './eventExplorer.css';

class EventExplorer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row id="main_menu">
          <p>eventExplorer</p>
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
