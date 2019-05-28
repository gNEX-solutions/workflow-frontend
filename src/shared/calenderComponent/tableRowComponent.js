import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { selectEvent } from '../../store/actions/DashBoardActions';
import './tableRow.css';

class TableRowComponent extends Component {
  state = {};

  onEventClicked(id) {
    // console.log(id)
    this.props.selectEvent(id);
  }

  render() {
    const {
      eventDate,
      eventStatus,
      eventName,
      eventId
    } = this.props.info;
    const { selectedEventId } = this.props;
    // let id = this.props.id;
    const dateMoment = new moment(eventDate);
    let style = 'inactive';
    if (eventId === selectedEventId) {
      style = 'active';
    }
    // console.log('props :' + id);
    return (
      <tr className={style} onClick={() => this.onEventClicked(eventId)}>
        <td id="eventInfo_date">{dateMoment.date()}</td>
        <td>{eventStatus}</td>
        <td>{eventName}</td>
      </tr>
      // <p>dinith</p>
    );
  }
}
const mapStateToProps = state => ({
  selectedEventId: state.dashboard.selectedEventId
});
export default connect(
  mapStateToProps,
  { selectEvent }
)(TableRowComponent);
