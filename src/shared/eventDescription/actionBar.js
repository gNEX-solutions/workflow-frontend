/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import DeleteDialogBox from '../deleteDialogBox/deleteDialogBox';
import EditEventPannel from '../editEventComponent/editEvent';
import './actionBar.css';

class ActionBar extends Component {
    state = {
        showDeleteEvent: false,
        showEditEvent: false,
    };

    editEventClicked = () => {
        // alert('edit event');
        this.setState({
            showEditEvent: true
        });
    };

    deleteEventClicked = () => {
        this.setState({
            showDeleteEvent: true
        })
    };
    closeModalDeleteClicked = () => {
        
        this.setState({
            showDeleteEvent: false
        })
    }
    closeModalEditClicked = () => {
        // alert('close')
        this.setState({
            showEditEvent: false
        });
    }

    render() {
        const { publish } = this.props;
        const { showDeleteEvent, showEditEvent } = this.state;
        return (
            <React.Fragment>
                <ListGroup>
                    <ListGroupItem disabled={!publish}> publish </ListGroupItem>
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
