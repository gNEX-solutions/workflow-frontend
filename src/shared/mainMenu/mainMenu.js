import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import './mainMenu.css';
import SearchFieldComponent from "../search_field/searchfieldComponent";
import events from './serachEventService.js'

class MainMenuComponent extends Component {
  state = {
    eventExpStatus: 'active',
    calenderStatus: '',
    historyStatus: ''
  };

  eventExpClicked() {
    // alert('event exp clicked');
    console.log('event exp clicked ');
  }

  calenderCicked() {
    console.log('calender clicked');
    this.setState({
      eventExpStatus: '',
      calenderStatus: 'active',
      historyStatus: ''

    })
  }

  searchButtonClicked() {
    // alert('search btn clicked');
    console.log('search btn clicked');
  }
  render() {
    return (
      <React.Fragment>
        <Col className="col-1">
        </Col>
        <Col className="col-2">
          <Button variant="success" id="add_button" >
            <FontAwesomeIcon icon={faPlusCircle} size="2x" />

            &nbsp; &nbsp;  New Event

          </Button>
        </Col >
        <Col className="col-2" id="calender">
          <div className={this.state.calenderStatus}>
            <Link to={"/calender"} onClick={this.calenderCicked} >
              <h3>
                <span className="badge badge-light" id={this.state.calenderStatus}>Event Calender</span>
              </h3>
            </Link>
          </div>

        </Col>
        <Col className="col-2" id="explorer">
          <div id={this.state.eventExpStatus}>
            <Link to={"/eventExp"} onClick={this.eventExpClicked}>
              <h3>
                <span className="badge badge-light" id={this.state.eventExpStatus}>Event Explorer</span>
              </h3>
            </Link>

          </div>
        </Col>
        <Col className="col-2" id="history">
          <div className={this.state.historyStatus}>
            <Link to={"/history"} >
              <h3>
                <span className="badge badge-light" id="active">History</span>
              </h3>
            </Link>
          </div>
        </Col>
        <div>
          <div className="searchFieldComponent">
            <SearchFieldComponent items={events}/>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default MainMenuComponent;
