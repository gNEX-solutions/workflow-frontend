import React, { Component } from "react";
import HeaderComopnet from "../../shared/header/headerComponent";
import MainMenuCompoannent from "../../shared/mainMenu/mainMenu";
import { Row, Col, Table } from "react-bootstrap";
import './eventExplorer.css';
class EventExplorer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row>
          <HeaderComopnet />
        </Row>
        <Row>
          <MainMenuCompoannent />
        </Row>

        <Row>
          <div className="table-responsive">
            <Col className="col-md-10 col-sm-10">
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th> &nbsp; &nbsp;</th>
                    <th>1st Year</th>
                    <th>2nd Year</th>
                    <th>3rd Year</th>
                    <th>4th Year</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>

              </Table>
            </Col>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default EventExplorer;
