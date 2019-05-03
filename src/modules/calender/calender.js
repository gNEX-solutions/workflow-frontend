import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ApprovalSection from '../../shared/approval_section/approvalSectionComponent';
import EventDescription from '../../shared/eventDescription/eventDescription';
import CalenderFooter from '../../shared/calenderFooter/calenderFooter';
import CalenderComponent from '../../shared/calenderComponent/calenderComponent';
import EventComponent from './components/eventComponent/EventComponent';
import CommentSection from '../../shared/commentSection/Comments';
import './calender.css';

export const events = [
  {
    eventId: 7,
    eventName: 'Exposition2020',
    eventDate: '2019-05-15 14:40:02',
    eventStartTime: '08:00:00',
    eventEndTime: '11:00:00',
    eventStatus: 'OK',
    eventLocation: 'DIM',
    eventCoordinatorDetails: [
      {
        imNumber: 'IM/2019/043',
        name: 'kasun',
        coordinatorUId: 8
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription: 'zero',
    eventApprovedStatus: 'OK',
    eventCreatedAt: '2019-04-02T10:31:10.000+0000',
    eventUpdatedAt: '2019-04-02T10:31:10.000+0000'
  },
  {
    eventId: 9,
    eventName: 'Exposition2020',
    eventDate: '2019-05-15 14:40:02',
    eventStartTime: '08:00:00',
    eventEndTime: '11:00:00',
    eventStatus: 'OK',
    eventLocation: 'DIM',
    eventCoordinatorDetails: [
      {
        imNumber: 'IM/2019/043',
        name: 'kasun',
        coordinatorUId: 10
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription: 'zero',
    eventApprovedStatus: 'OK',
    eventCreatedAt: '2019-04-02T10:31:14.000+0000',
    eventUpdatedAt: '2019-04-02T10:31:14.000+0000'
  },
  {
    eventId: 11,
    eventName: 'Exposition2020',
    eventDate: '2019-05-15 14:40:02',
    eventStartTime: '08:00:00',
    eventEndTime: '11:00:00',
    eventStatus: 'OK',
    eventLocation: 'DIM',
    eventCoordinatorDetails: [
      {
        imNumber: 'IM/2019/043',
        name: 'kasun',
        coordinatorUId: 12
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription: 'zero',
    eventApprovedStatus: 'OK',
    eventCreatedAt: '2019-04-02T10:31:17.000+0000',
    eventUpdatedAt: '2019-04-02T10:31:17.000+0000'
  },
  {
    eventId: 13,
    eventName: 'Exposition2020',
    eventDate: '2019-05-15 14:40:02',
    eventStartTime: '08:00:00',
    eventEndTime: '11:00:00',
    eventStatus: 'OK',
    eventLocation: 'DIM',
    eventCoordinatorDetails: [
      {
        imNumber: 'IM/2019/043',
        name: 'kasun',
        coordinatorUId: 14
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription: 'zero',
    eventApprovedStatus: 'OK',
    eventCreatedAt: '2019-04-02T10:31:20.000+0000',
    eventUpdatedAt: '2019-04-02T10:31:20.000+0000'
  },
  {
    eventId: 17,
    eventName: 'Exposition2020',
    eventDate: '2019-05-15 14:40:02',
    eventStartTime: '08:00:00',
    eventEndTime: '11:00:00',
    eventStatus: 'OK',
    eventLocation: 'DIM',
    eventCoordinatorDetails: [
      {
        imNumber: 'IM/2019/043',
        name: 'kasun',
        coordinatorUId: 18
      }
    ],
    eventParticipants: 'ALL',
    eventBudget: '2000',
    eventDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus neque, suscipit luctus eros eu, suscipit malesuada felis. Donec convallis aliquet urna, quis lacinia eros volutpat nec. Integer ',
    eventApprovedStatus: 'OK',
    eventCreatedAt: '2019-04-02T10:31:58.000+0000',
    eventUpdatedAt: '2019-04-02T10:31:58.000+0000'
  }
];

class CalenderSection extends Component {
  state = {
    showUserProfile: false,
    showNotificationPannel: false,
    showCommentsSection: false,
    selectedEventId: null
  };
  // added by dj: 20/03/2019 : handling the state of the user profile section
  handleProfClick = () => {
    this.setState({
      showUserProfile: !this.state.showUserProfile
    });
  };

  handleEventOnClick = id => {
    this.setState({
      selectedEventId: id
    });
  };

  renderEvents = () => {
    const arr = [];
    events.map((event, index) => {
      arr.push(
        <EventComponent event={event} onEventClick={this.handleEventOnClick} />
      );
    });

    return arr;
  };

  onCommentsClicked = () => {
    this.setState({
      showCommentsSection: true
    });
  };

  renderEventDiscription = () => {
    // console.log(events);
    const discription = events.map((event, index) => {
      if (event.eventId === this.state.selectedEventId) {
        return (
          <React.Fragment>
            <Row id="event_description_row">
              <EventDescription id="event_description" event={event} />
            </Row>
            <Row id="app_section_row">
              <ApprovalSection id="app_section" event={event} />
            </Row>
            <Row>
              <CalenderFooter
                id="cal_footer"
                event={event}
                onCommentIconClicked={this.onCommentsClicked}
              />
            </Row>
          </React.Fragment>
        );
      }
    });
    return discription;
  };

  render() {
    const monthlyEvents = this.state.selectedEventId
      ? this.renderEventDiscription()
      : this.renderEvents();
    const { showCommentsSection } = this.state;
    return (
      <React.Fragment>
        {/* <Row> */}

        {/* <Overlay
            show={this.state.showUserProfile}
            placement="bottom-end"
            target={this}
            container={this}
            containerPadding={20}
          >
            <Popover id="popover-contained" title="Popover bottom">
              <UserProfileSection />
            </Popover>
          </Overlay>
          <Overlay
            show={this.state.showNotificationPannel}
            placement="bottom-end"
            target={this}
            container={this}
            containerPadding={2}
          > */}
        {/* <Popover id="popover-contained" title="Popover bottom">
              <div>
                <NotificationPannel />
              </div>
            </Popover>
          </Overlay> */}
        {/* </Row> */}
        {/* <Row className="cal_row" >
          <MainMenuCompoannent />
        </Row> */}
        <Row>
          <Col className="col-4" id="calender_section">
            {showCommentsSection ? <CommentSection /> : <CalenderComponent />}
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

export default CalenderSection;
