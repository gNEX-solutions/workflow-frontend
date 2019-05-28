import React from 'react';
// import PropTypes from 'prop-types';
import './Event.styles.css';

class EventComponent extends React.Component {
  static defaultProps;

  // constructor(props) {
  //   super(props);
  // }

  handleEventOnClick = () => {
    const { event, onEventClick } = this.props;
    onEventClick(event.eventId);
  };

  renderContent = () => {
    const { event } = this.props;

    return (
      <button
        // href="#"
        className="eventContainer"
        onClick={this.handleEventOnClick}
      >
        <h3>{event.eventName}</h3>
        <p>{event.eventDescription}</p>
      </button>
    );
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

EventComponent.propTypes = {};

EventComponent.defaultProps = {};

export default EventComponent;
