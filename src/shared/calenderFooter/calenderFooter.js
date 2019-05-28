import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import imgComments from "../../img/imgComments.svg";
import './calenderFooter.css';

class CalenderFooter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row id="footer_main">
          <Col className="col-10" id="documents">
            {/* <Row>
              <p>
                {' '}
                <strong> attached files </strong>
              </p> 
            </Row>
            <Row>
              <a href="https://drive.google.com/open?id=0ByhoEhcLlZ7FZ2EyNW9oT0pIWHc">
                <p> proposal </p>
              </a>
            </Row> */}
          </Col>
          <Col className="col-1" id="comments">
            {/* <FontAwesomeIcon icon={faComment} size="2x" /> */}
            <Avatar src={imgComments} size='50' />
            {/* <p>dinth</p> */}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CalenderFooter;
