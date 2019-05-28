import React, { Component } from "react";
import { connect } from "react-redux";
import EventComponent from "../../shared/eventComponent/EventComponent";
import { selectEvent } from "../../store/actions/DashBoardActions";
import "./searchResults.css";

class SearchResults extends Component {
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

    const { searchSuggestions } = this.props;

    arr = searchSuggestions.map((event, index) =>
      (
        <EventComponent event={event} onEventClick={this.handleEventOnClick} />
      )
    );

    return arr;
  };

  render() {
    const allSuggestions = this.renderEvents();

    return (
      <React.Fragment>
        <div className="historySection row">
          <div className="historyCalendar col-md-4 ">
            <p>search results</p>
          </div>
          <div className="historyDetail col-md-8 ">{allSuggestions}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchSuggestions: state.dashboard.searchSuggestions
});

export default connect(
  mapStateToProps,
  { selectEvent }
)(SearchResults);
