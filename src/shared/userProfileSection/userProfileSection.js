import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom';
import "./userProfileSection.css";

class UserProfileSection extends Component {
  state = {
    redirect: false, // dj: 20/03/2019 : return routing to login
    profilePic: require("./akalanka.JPG"),
    name: "Akalanka Jayalath",
    designation: "President"
  };

  signoutOnClick = () => {
    console.log('sout');
    this.setState({
      redirect: true
    });
  }
  render() {
    // added by dj : 20/02/2018 : return routing to login 
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/login' />;
    }
    // end of section : dj  
    else {
      return (
        // Profile Section
        <div
          id="main"
          className="rounded shadow p-2 mb-5 bg-white rounded list-inline-item m-1"
        >
          <hr className="my-2 mx-0" />

          {/* Profile picture of the user */}
          <img
            src={this.state.profilePic}
            alt=""
            className="rounded-circle float-left"
          />

          {/* Username and the designation of the user */}
          <div id="userInfo" className="float-left ml-2">
            <h6 id="name" className="mb-0">
              {this.state.name}
              <hr className="my-1 mx-0" />
            </h6>
            <h1 id="designation">{this.state.designation}</h1>
          </div>

          {/* Setting button */}
          <button className="btn btn-light btn-block btn-sm text-left">
            Settings
        </button>
          <hr className="my-2 mx-0" />

          {/* Sign out button */}
          <button className="btn btn-outline-danger btn-block btn-sm text-left" onClick={this.signoutOnClick}>
            <FontAwesomeIcon icon={faPowerOff} size="1x" className="mr-1" />
            Sign out
        </button>
        </div>
      );
    }
  }
}

export default UserProfileSection;
