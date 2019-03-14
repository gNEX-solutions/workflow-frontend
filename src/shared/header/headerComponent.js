import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import './headerComponent.css';


let ufname = 'Akalanka';
let ulname='Jayalth';
let udesignation='President';
let userimage="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
AppBar :{
   background: 'black',
   position:'static',
   color:"inherit",
},
Typography:{
  color:'white',
  fontWeight: 'bold', 
  fontSize:'100%',
},
IconButton :{
  color:'white',
},
Avatar :{
  margin: 0, 
  width: 40, 
  height: 40,
},
UserDetails :{
  marginTop:'2%',
},
Fname :{
  color:'white' , 
  fontWeight:'bold' ,
  fontSize:"80%",
},
Lname:{
  color:'grey' , 
  fontWeight:'bold',
  fontSize:"80%",
},
Designation :{
  color:'white', 
  fontStyle:'italic' , 
  fontSize:"60%",
}
};

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
        <Grid container  justify="center" alignContent="flex-start">
          <Typography variant="h6" style={styles.Typography}>
            IMSSA Event Manager
          </Typography>
          </Grid>
          <Grid container  justify="center" alignContent="flex-end" >
          <IconButton  style={styles.IconButton}>
            <Badge badgeContent={this.state.numberofNotifications} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton  >
          <IconButton style={styles.IconButton}>
          <Avatar alt="user_icon" src={userimage} style={styles.Avatar} />
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
