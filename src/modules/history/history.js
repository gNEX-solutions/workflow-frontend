import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import HeaderComponent from '../../shared/header/headerComponent';
import MainMenuComponent from '../../shared/mainMenu/mainMenu';
import './history.css';

class HistorySection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="historySection row">
          <div className="historyCalendar col-md-4 ">
            <p>history</p>
          </div>
          <div className="historyDetail col-md-8 ">
            <p>history</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HistorySection;
