import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import AddNewEventComponent from '../addEventComponent/addNewEvent';
import { setSerchOverlay } from '../../store/actions/DashBoardActions';
import './mainMenu.css';

import SearchFieldComponent from '../search_field/searchfieldComponent';
// import events from './serachEventService.js';

class MainMenuComponent extends Component {
  state = {
    eventExpStatus: '',
    calenderStatus: '',
    historyStatus: '',
    showAddNewEvent: false
  };
  modalTitle = 'Add New Event';

  addNewEventClicked = () => {
    // alert('add new event');
    this.setState({
      showAddNewEvent: true
    });
  };

  closeAddNewEvent = () => {
    this.setState({
      showAddNewEvent: false
    });
  };
  modalTitle = 'Add New Event';

  addNewEventClicked = () => {
    // alert('add new event');
    this.setState({
      showAddNewEvent: true
    });
  };

  closeAddNewEvent = () => {
    this.setState({
      showAddNewEvent: false
    });
  };

  searchButtonClicked = () => {
    const { setSerchOverlay, onSearchPress } = this.props;
    setSerchOverlay(false);
    onSearchPress();
    console.log('search btn clicked');
  };

  eventExpClicked = () => {
    const { onEventExplorerPress } = this.props;
    onEventExplorerPress();
  };

  calenderCicked = () => {
    const { onEventCalendarPress } = this.props;
    onEventCalendarPress();
  };

  historyClicked = () => {
    const { onEventHistoryPress } = this.props;
    onEventHistoryPress();
  };

  calenderCicked() {
    this.setState({
      eventExpStatus: '',
      calenderStatus: 'active',
      historyStatus: ''
    });
  }
  hideOverlays = () => {
    this.props.setSerchOverlay(false);
  }

  render() {
    const { calenderStatus, eventExpStatus, historyStatus } = this.state;
    return (
      <React.Fragment>
        <div className="row menuOuter" onClick={this.hideOverlays}>
          <Modal
            show={this.state.showAddNewEvent}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header id="modal_header">
              <Modal.Title id="modal_title">{this.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddNewEventComponent onCancel={this.closeAddNewEvent} />
            </Modal.Body>
          </Modal>

          <Col className="col-2">
            <Button
              // variant="success"
              className="btnAddNewEvent"
              id="add_button"
              onClick={this.addNewEventClicked}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="2x" />
              &nbsp; &nbsp;Add New Event
            </Button>
          </Col>
          <Col className="col-2" id="calender">
            <div className={calenderStatus}>
              <button
                href="#"
                onClick={this.calenderCicked}
                className="menuOption"
              >
                <h3>
                  <span className=" " id="calenderMenu">
                    Event Calender
                  </span>
                </h3>
              </button>
            </div>
          </Col>

          <Col className="col-2" id="explorer">
            <div id={eventExpStatus}>
              <button
                href="#"
                onClick={this.eventExpClicked}
                className="menuOption"
              >
                <h3>
                  <span className="" id="explorerMenu">
                    Event Explorer
                  </span>
                </h3>
              </button>
            </div>
          </Col>

          <Col className="col-2" id="history">
            <div className={historyStatus}>
              <button
                href="#"
                onClick={this.historyClicked}
                className="menuOption"
              >
                {/* <h3>
                  <span className="" id="histroyMenu">
                    History
                  </span>
                </h3> */}
              </button>
            </div>
          </Col>
          <div>
            {/* dumindu's code pasted  */}
            <div className="searchFieldComponent">
              <SearchFieldComponent
                onEventCalendarPress={this.props.onEventCalendarPress}
              />
            </div>
          </div>
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

          {/* <Col className="col-2" id="search_box">
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
          </Col> */}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { setSerchOverlay }
)(MainMenuComponent);
