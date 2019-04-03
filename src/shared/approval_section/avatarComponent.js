import React, { Component } from "react";
import './avatar.css';

class AvatarComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Avatar">
          <img src={require('../../img/avatar.png')} className="AvatarImage" alt="logo"/>
          <p className="AvatarName">{this.props.Name}</p>
          <p className="AvatarTitle">{this.props.Title}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default AvatarComponent;