import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import "./calenderFooter.css";
class CalenderFooter extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Row id="footer_main">
                    <Col className="col-9" id="documents">
                        <Row>
                            <p> <strong> attached files </strong></p>
                        </Row>
                        <Row>
                            <a href="https://drive.google.com/open?id=0ByhoEhcLlZ7FZ2EyNW9oT0pIWHc"><p> proposal </p></a>
                        </Row>

                    </Col>
                    <Col className="col-3" id="comments">
                        <FontAwesomeIcon icon={faComment} size="2x"></FontAwesomeIcon>
                    </Col>
                </Row>


            </React.Fragment>
        );
    }
}

export default CalenderFooter;