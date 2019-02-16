import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/main";
class CalenderSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header> calender section </header>
        <HeaderComponent />
        <MainMenuCompoannent />
      </React.Fragment>
    );
  }
}

export default CalenderSection;
