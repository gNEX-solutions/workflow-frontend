import React, { Component } from "react";
import HeaderComopnet from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
class EventExplorer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header> event explorere section </header>
        <HeaderComopnet />
        <MainMenuCompoannent />
      </React.Fragment>
    );
  }
}

export default EventExplorer;
