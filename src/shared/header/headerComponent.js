import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  Nav,
  Form,
  Badge,
  // NavItem,
  OverlayTrigger,
  Popover
} from 'react-bootstrap';
// import {
//   Toolbar,
//   Typography,
//   Grid,
//   IconButton,
//   NotificationsIcon
// } from 'reactstrap';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import NotificationPannel from './NotificationPanel';
import UserProfileSection from '../userProfileSection/userProfileSection';

import './headerComponent.css';
import userImg from '../../img/akalanka.JPG';

const ufname = 'Akalanka';
const ulname = 'Jayalath';
const udesignation = 'president';
const numberofNotifications = 10;
const userimage = userImg;

class HeaderComponent extends Component {
  state = {};

  toggleNotificationIcon = () => {
    // alert("not clicked");
  };

  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <Navbar
            className="navbar"
            collapseOnSelect
            expand="lg"
            // bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home">IMSSA Events Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="col-sm-6 " />
              <div className="col-sm-6 right">
                <Form inline className="col-sm-6 right">
                  <div className="notification_icon">
                    {/* <Nav.Link href="#notification" /> */}
                    <OverlayTrigger
                      trigger="click"
                      key={1}
                      placement="bottom"
                      overlay={
                        <Popover id="popover-positioned">
                          <NotificationPannel />
                        </Popover>
                      }
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faBell}
                          style={{ color: 'white', fontSize: '130%' }}
                          className="notfication_button"
                          onclick={this.toggleNotificationIcon()}
                        />
                        <Badge
                          variant="light"
                          style={{ backgroundColor: 'red' }}
                        >
                          {numberofNotifications}
                        </Badge>
                        <span className="sr-only">unread messages</span>
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div className="user_avatar">
                    <Nav.Link href="#user">
                      <Avatar
                        className="avatar"
                        name={ufname}
                        src={userimage}
                        size="40"
                        round
                        color="gray"
                      />
                    </Nav.Link>
                  </div>
                  <OverlayTrigger
                    trigger="click"
                    key={1}
                    placement="bottom"
                    overlay={
                      <Popover id="popover_userProfile">
                        <UserProfileSection />
                      </Popover>
                    }
                  >
                    <div className="user_details">
                      <span className="Fname">{ufname}</span>
                      <span className="Lname">{ulname}</span>
                      <h6 className="Designation">{udesignation}</h6>
                    </div>
                  </OverlayTrigger>
                </Form>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
