import React, { Component } from "react";
import { connect } from "react-redux";
import EventComponent from "../../shared/eventComponent/EventComponent";
import { selectEvent } from "../../store/actions/DashBoardActions";
import "./history.css";

class HistorySection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleEventOnClick = id => {
    // this.setState({
    //   selectedEventId: id
    // });

    this.props.selectEvent(id);
    this.props.onEventCalendarPress();
  };

  renderEvents = () => {
    let arr = [];

    const { pastEvents } = this.props;

    arr = pastEvents.map((event, index) => (

      <EventComponent event={event} onEventClick={this.handleEventOnClick} />
    )
    );

    return arr;
  };

  render() {
    const allPastEvents = this.renderEvents();

    return (
      <React.Fragment>
        <div className="historySection row">
          <div className="historyCalendar col-md-4 ">
            <p>history</p>
          </div>
          <div className="historyDetail col-md-8 ">{allPastEvents}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pastEvents: state.dashboard.pastEvents
});

export default connect(
  mapStateToProps,
  { selectEvent }
)(HistorySection);
