import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectEvent } from '../../store/actions/DashBoardActions';

import ApprovalSection from '../../shared/approval_section/approvalSectionComponent';
import EventDescription from '../../shared/eventDescription/eventDescription';
import CalenderFooter from '../../shared/calenderFooter/calenderFooter';
import CalenderComponent from '../../shared/calenderComponent/calenderComponent';
import EventComponent from '../../shared/eventComponent/EventComponent';
import './calender.css';

class CalenderSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserProfile: false,
      showNotificationPannel: false,
      selectedEventId: null
    };
  }

  // added by dj: 20/03/2019 : handling the state of the user profile section
  handleProfClick = () => {
    this.setState({
      showUserProfile: !this.state.showUserProfile
    });
  };

  handleEventOnClick = id => {
    this.props.selectEvent(id);
    // this.setState({ selectedEventId: id });
  };

  renderEvents = () => {
    let arr = [];
    arr = this.props.events.map((event, index) =>
      (
        <EventComponent event={event} onEventClick={this.handleEventOnClick} />
      )
    );

    return arr;
  };

  renderEventDiscription = () => {
    const { events, searchEvents, expEvents, selectedEventId } = this.props;
    const resultEvents = [...events, ...searchEvents, ...expEvents];
    const filterEvent = resultEvents.filter(
      event => event.eventId === selectedEventId
    )[0];
    return (
      <React.Fragment>
        <Row id="event_description_row">
          <EventDescription id="event_description" event={filterEvent} />
        </Row>
        <Row id="app_section_row">
          <ApprovalSection id="app_section" event={filterEvent} />
        </Row>
        <Row>
          <CalenderFooter id="cal_footer" event={filterEvent} />
        </Row>
      </React.Fragment>
    );
  };

  render() {
    const monthlyEvents = this.props.selectedEventId
      ? this.renderEventDiscription()
      : this.renderEvents();
    return (
      <React.Fragment>
        <Row>
          <Col className="col-4" id="calender_section">
            <CalenderComponent />
          </Col>
          <Col className="col-8" id="event_info">
            {monthlyEvents}
          </Col>
        </Row>
        {/* <Row>
            <p> header 1</p>
          </Row> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedEventId: state.dashboard.selectedEventId,
  events: state.dashboard.events,
  pastEvents: state.dashboard.pastEvents,
  searchEvents: state.dashboard.searchSuggestions,
  expEvents: state.dashboard.expEvents
});

export default connect(
  mapStateToProps,
  { selectEvent }
)(CalenderSection);
