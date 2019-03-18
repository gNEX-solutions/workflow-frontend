import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import "./headerComponent.css";

import styles from "./Header.styles";

let ufname = "Akalanka";
let ulname = "Jayalth";
let udesignation = "President";
let userimage =
  "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png";

class HeaderComponent extends Component {
  state = {
    numberofNotifications: 10
  };

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
                <IconButton style={styles.IconButton}>
                  <Avatar
                    alt="user_icon"
                    src={userimage}
                    style={styles.Avatar}
                  />
                </IconButton>
                <div className="UserDetails" style={styles.UserDetails}>
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
