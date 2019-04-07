import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import './mainMenu.css';

class MainMenuComponent extends Component {
  state = {
    eventExpStatus: 'active',
    calenderStatus: '',
    historyStatus: ''
  };

  eventExpClicked = () => {
    // alert('event exp clicked');
    console.log('event exp clicked ');
    const { onEventExplorerPress } = this.props;
    onEventExplorerPress();
  };

  calenderCicked = () => {
    const { onEventCalendarPress } = this.props;
    onEventCalendarPress();
    console.log('calender clicked');
    this.setState({
      eventExpStatus: '',
      calenderStatus: 'active',
      historyStatus: ''
    });
  };

  historyClicked = () => {
    const { onEventHistoryPress } = this.props;
    onEventHistoryPress();
    console.log('History clicked');
  };

  searchButtonClicked = () => {
    // alert('search btn clicked');
    console.log('search btn clicked');
  };

  render() {
    return (
      <React.Fragment>
        <Col className="col-1" />

        <a href="" />

        <Col className="col-2">
          <Button variant="success" id="add_button">
            <FontAwesomeIcon icon={faPlusCircle} size="2x" />
            &nbsp; &nbsp; New Event
          </Button>
        </Col>
        <Col className="col-2" id="calender">
          <div className={this.state.calenderStatus}>
            <button href="#" onClick={this.calenderCicked} className="button">
              <h3>
                <span
                  className="badge badge-light"
                  id={this.state.calenderStatus}
                >
                  Event Calender
                </span>
              </h3>
            </button>
          </div>
        </Col>
        <Col className="col-2" id="explorer">
          <div id={this.state.eventExpStatus}>
            <button href="#" onClick={this.eventExpClicked} className="button">
              <h3>
                <span
                  className="badge badge-light"
                  id={this.state.eventExpStatus}
                >
                  Event Explorer
                </span>
              </h3>
            </button>
          </div>
        </Col>
        <Col className="col-2" id="history">
          <div className={this.state.historyStatus}>
            <button href="#" onClick={this.historyClicked} className="button">
              <h3>
                <span className="badge badge-light" id="active">
                  History
                </span>
              </h3>
            </button>
          </div>
        </Col>
        <Col className="col-2" id="search_box">
          <div className="input-group mb-3" id="search_group">
            <input
              type="text"
              className="form-control"
              placeholder="search events"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onKeyPress={this.searchButtonClicked}
            />

            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-search"
                onClick={this.searchButtonClicked}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default MainMenuComponent;
