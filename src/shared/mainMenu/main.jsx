import React, { Component } from "react";
import { Link } from "react-router-dom";
class MainMenuComponent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to={"/calender"}>calender</Link>
          </li>
          <li>
            <Link to={"/eventExp"}>Event Eplorer</Link>
          </li>
          <li>
            <Link to={"/history"}>History</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MainMenuComponent;
