import React, { Component } from 'react';
import * as moment from 'moment';
import './tableRow.css';

class TableRowComponent extends Component {
  state = {};

  render() {
    const { eventDate, eventApprovedStatus, eventName } = this.props.info;
    let id = this.props.id;
    const dateMoment = new moment(eventDate);
    // console.log('props :' + id);
    return (
      <tr
        className={this.props.style}
        onClick={() => this.props.onItemClick(id)}
      >
        <td id="eventInfo_date">{dateMoment.date()}</td>
        <td>{eventApprovedStatus}</td>
        <td>{eventName}</td>
      </tr>
      // <p>dinith</p>
    );
  }
}

export default TableRowComponent;
