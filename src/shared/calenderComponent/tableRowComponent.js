import React, { Component } from 'react';
import './tableRow.css';

class TableRowComponent extends Component {
  state = {};

  render() {
    let { date, state, name } = this.props.info;
    let id = this.props.id;
    // console.log('props :' + id);
    return (
      <tr
        className={this.props.style}
        onClick={() => this.props.onItemClick(id)}
      >
        <td id="eventInfo_date">{date}</td>
        <td>{state}</td>
        <td>{name}</td>
      </tr>
      // <p>dinith</p>
    );
  }
}

export default TableRowComponent;
