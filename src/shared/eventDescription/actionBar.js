/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import DeleteDialogBox from '../deleteDialogBox/deleteDialogBox';
import EditEventPannel from '../editEventComponent/editEvent';
import publishDialogBox from '../publishDialogBox/publishDialogBox';
import './actionBar.css';
import PublishDialogBox from '../publishDialogBox/publishDialogBox';

class ActionBar extends Component {
    state = {
        showDeleteEvent: false,
        showEditEvent: false,
        showPublishEvent: false
    };



    closeModalDeleteClicked = () => {

        this.setState({
            showDeleteEvent: false
        })
    }
    deleteEventClicked = () => {
        this.setState({
            showDeleteEvent: true
        })
    };
    closeModalEditClicked = () => {
        // alert('close')
        this.setState({
            showEditEvent: false
        });
    }
    editEventClicked = () => {
        // alert('edit event');
        this.setState({
            showEditEvent: true
        });
    };

    closeModalPublishClicked = () => {
        this.setState({
            showPublishEvent: false
        })
    }

    publishEventclicked = () => {
        this.setState({
            showPublishEvent: true
        })
    }

    render() {
        const { publish } = this.props;
        const { showDeleteEvent, showEditEvent, showPublishEvent } = this.state;
        return (
            <React.Fragment>
                <ListGroup>
                    <ListGroupItem disabled={!publish} onClick={this.publishEventclicked}> publish </ListGroupItem>
                    <ListGroupItem onClick={this.editEventClicked} id="editEvent">
                        {' '}
                        Edit Event{' '}
                    </ListGroupItem>
                    <ListGroupItem variant="danger" onClick={this.deleteEventClicked}>
                        {' '}
                        Delete Event{' '}
                    </ListGroupItem>
                </ListGroup>
                <Modal
                    show={showPublishEvent}
                    size="md"
                    aria-labelledby="xample-custom-modal-styling-title"
                    id="modalPublish"
                    centered
                >
                    <Modal.Header id="modal_header">
                        <Modal.Title id="modal_title"> PUBLISH EVENT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalDeleteBody" >
                        <PublishDialogBox close={this.closeModalPublishClicked} />

                    </Modal.Body>
                </Modal>
                <Modal
                    show={showDeleteEvent}
                    size="md"
                    aria-labelledby="xample-custom-modal-styling-title"
                    id="modalDelete"
                    centered
                >
                    <Modal.Header id="modal_header">
                        <Modal.Title id="modal_title"> DELETE EVENT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalDeleteBody" >
                        <DeleteDialogBox close={this.closeModalDeleteClicked} />

                    </Modal.Body>
                </Modal>
                <Modal
                    show={showEditEvent}
                    size="lg"
                    aria-labelledby="xample-custom-modal-styling-title"
                    id="modalEdit"
                    centered
                >
                    <Modal.Header id="modal_header">
                        <Modal.Title id="modal_title"> EDIT EVENT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalDeleteBody" >
                        <EditEventPannel close={this.closeModalEditClicked} />

                    </Modal.Body>
                </Modal>
            </React.Fragment >
        );
    }
}

export default ActionBar;
