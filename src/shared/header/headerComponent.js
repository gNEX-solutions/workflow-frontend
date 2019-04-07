import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav, Form, Badge, NavItem  } from 'react-bootstrap';
import { faBell} from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

import styles from "./Header.styles";

let ufname = 'Akalanka ';
let ulname='Jayalth';
let udesignation='President';
let userimage="";
let numberofNotifications=10;

class HeaderComponent extends Component {
  state = {
  
  };

  render() {
    return (
      <React.Fragment>
     
      <div className="heading">
       
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">IMSSA Events Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
             <div className="col-sm-6"></div>
             <div className="col-sm-6">
            
             
        <Form inline  alignContent="flex-end" >
            
             <div classname="notification_icon">
             <Nav.Link href="#notification">
             <FontAwesomeIcon icon={faBell} style={{color:'white' ,fontSize:"130%"}} className="notfication_button"></FontAwesomeIcon>
             <Badge variant="light" style={{backgroundColor:"red"}}>{numberofNotifications}</Badge>
             <span className="sr-only">unread messages</span>
             </Nav.Link>
             </div>
            
     
             <div className="user_avatar">
             <Nav.Link href="#user">
             <Avatar className ="avatar" name={ufname} src={userimage} size="40" round={true} color="gray"/>
             </Nav.Link>
             </div>
            
        
             <div className="user_details">
             <span style={{color:'white',
                            fontWeight:'bold',
                              fontSize:'80%'}}>{ufname}</span>
             <span style={{color:'grey' , 
                             fontWeight:'bold',
                               fontSize:"80%"}}>{ulname}</span>
             <h6 style={{color:'white', 
                          fontStyle:'italic' , 
                            fontSize:"60%"}}>{udesignation}</h6>
             </div>
         
          </Form>
         </div>
            
         </Navbar.Collapse>
        </Navbar>;
       </div>
 
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
