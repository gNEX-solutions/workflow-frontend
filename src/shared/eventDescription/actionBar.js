/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import DeleteDialogBox from '../deleteDialogBox/deleteDialogBox';
import './actionBar.css';

class ActionBar extends Component {
    state = {
        showDeleteEvent: false
    };

    editEventClicked = () => {
        alert('edit event');
    };

    deleteEventClicked = () => {
        this.setState({
            showDeleteEvent: true
        })
    };
    closeModalDeleteClicked = () => {
        // alert('close')
        this.setState({
            showDeleteEvent: false
        })
    }

    render() {
        const { publish } = this.props;
        const { showDeleteEvent } = this.state;
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
                    size="xs"
                    // dialogClassName="modal-90w"
                    aria-labelledby="xample-custom-modal-styling-title"
                    centered
                    // backdrop={false}
                    id="modalDelete"
                >
                    <Modal.Header id="modal_header">
                        <Modal.Title id="modal_title"> DELETE EVENT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalDeleteBody" >
                        <DeleteDialogBox close={this.closeModalDeleteClicked} />

                    </Modal.Body>
                </Modal>
            </React.Fragment >
        );
    }
}

export default ActionBar;
