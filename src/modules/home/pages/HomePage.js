import React, { Component } from "react";
import HeaderComponent from "../../../shared/header/headerComponent";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="header">
            <HeaderComponent />
          </div>
          <div className="menu-bar">
            <h1>menu bar</h1>
          </div>
          <div className="body">
            <div>
              <h1>clander side</h1>
            </div>
            <div>
              <h1>contentside</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
