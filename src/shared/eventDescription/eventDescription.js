import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class EventDescription extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>
                    <Row id="header_row" >
                        <h3> Im Cricket Match </h3>
                    </Row>
                    <Row id="basic_info_row">
                        <Col className="col-4">
                            <p> <strong>organised by</strong> : Year 1 </p>
                        </Col>
                        <Col className="col-4">
                            <p> <strong>coordinators</strong>  : Dinith Jayabodhi </p>
                        </Col>
                        <p> <strong>participants</strong> : All years </p>
                        <Col className="col-4"></Col>
                    </Row>

                    <Row>
                        <p> <strong>Description </strong></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus neque, suscipit luctus eros eu, suscipit malesuada felis. Donec convallis aliquet urna, quis lacinia eros volutpat nec. Integer faucibus nunc nec sagittis mattis. Nam nulla tortor, lobortis sit amet efficitur nec, varius eu elit. Integer vel viverra massa, a ultrices nulla. Duis risus enim, imperdiet ut odio vel, ultrices posuere.
                        </p>
                    </Row>
                    <Row>
                        <Col className="col-8"></Col>
                        <Col className="col-4">
                            <p> <strong> Budget </strong> : Rs 25 000</p>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default EventDescription;