import React, { Component } from "react";
class MainMenuComponent extends Component {
  state = {};

  // btnCalenderClicked = () => {
  //   alert("btn clicked");
  // };

  render() {
    return (
      <React.Fragment>
        <ul>
          <button onClick={() => alert("calender clcked")}>calender</button>
          <button onClick={() => alert("event explorer clcked")}>
            Event Explorer
          </button>
          <button onClick={() => alert("history clcked")}>History</button>
        </ul>
      </React.Fragment>
    );
  }
}

export default MainMenuComponent;
