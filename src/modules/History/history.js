import React, { Component } from "react";
import HeaderComponent from "../../shared/header/headerComponent";
import MainMenuComponent from "../../shared/mainMenu/mainMenu";
class HistorySection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header> history section </header>
        <HeaderComponent />
        <MainMenuComponent />
      </React.Fragment>
    );
  }
}

export default HistorySection;
