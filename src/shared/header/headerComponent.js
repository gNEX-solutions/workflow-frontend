import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Form, Badge, NavItem } from 'react-bootstrap';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';

import styles from './Header.styles';

const ufname = 'Akalanka';
const ulname = 'Jayalth';
const udesignation = 'President';
const numberofNotifications = 10;
const userimage =
  'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png';

class HeaderComponent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <AppBar className="EventManagerHeader" style={styles.AppBar}>
            <Toolbar>
              <Grid container justify="center" alignContent="flex-start">
                <Typography variant="h6" style={styles.Typography}>
                  IMSSA Event Manager
                </Typography>
              </Grid>
              <Grid container justify="center" alignContent="flex-end">
                <IconButton style={styles.IconButton}>
                  <Badge
                    badgeContent={this.state.numberofNotifications}
                    color="secondary"
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  style={styles.IconButton}
                  onClick={() => this.props.onProfClick()}
                >
                  {' '}
                  {/* dj:20/03/2019 : on click method  */}
                  <Avatar
                    id="avatar"
                    alt="user_icon"
                    src={userimage}
                    style={styles.Avatar}
                  />
                </IconButton>

                <div
                  className="UserDetails"
                  style={styles.UserDetails}
                  onClick={() => this.props.onProfClick()}
                >
                  {' '}
                  {/* dj:20/03/2019 : on click method  */}
                  <span style={styles.Fname}>{ufname}</span>
                  <span style={styles.Lname}>{ulname}</span>
                  <h6 style={styles.Designation}>{udesignation}</h6>
                </div>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
