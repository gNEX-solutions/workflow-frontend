/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import DeleteDialogBox from '../deleteDialogBox/deleteDialogBox';
import EditEventPannel from '../editEventComponent/editEvent';
import { connect } from 'react-redux';
// import publishDialogBox from '../publishDialogBox/publishDialogBox';
import './actionBar.css';
// import PublishDialogBox from '../publishDialogBox/publishDialogBox';
import DefaultDialogBox from '../defaultDialogBox/defaultDialogBox';

const userTypes = [
    {
        type: 'president',
        actions: ['publish', 'edit', 'rollback', 'delete']
    },
    {
        type: 'co-ordinator',
        actions: ['edit']
    },
    {
        type: 'hod',
        actions: ['approve', 'reject']
    }
]

const eventStatuses = [
    {
        type: 'pending',
        actions: ['edit', 'approve', 'reject', 'delete']
    },
    {
        type: 'approved',
        actions: ['rollback', 'delete', 'publish']
    },
    {
        type: 'published',
        actions: ['delete']
    }

]

class ActionBar extends Component {
    state = {
        showDeleteEvent: false,
        showEditEvent: false,
        showDefaultEvent: false,
        actionType: ''
    };

    actionButtonClicked = (actionType) => {
        // console.log(clickEvent);
        switch (actionType) {
            case 'edit':
                this.editEventClicked()
                break;
            default:
                this.openDefaultDialogBox(actionType)
                break;
        }
    }

    openDefaultDialogBox = (actionType) => {
        this.setState({
            showDefaultEvent: true,
            actionType: actionType
        })
    }

    closeDefaultDialogbox = () => {
        this.setState({
            showDefaultEvent: false,
            actionType: ''
        })
    }

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

    // closeModalPublishClicked = () => {
    //     this.setState({
    //         showPublishEvent: false
    //     })
    // }

    // publishEventclicked = () => {
    //     this.setState({
    //         showPublishEvent: true
    //     })
    // }


    getEventListItems() {
        const { status, userType } = this.props;
        const userActions = userTypes.filter((userType) => (userType.type === 'president'))[0].actions;
        const eventStatusActions = eventStatuses.filter((eventStatus) => (eventStatus.type === status))[0].actions;
        return userActions
            .filter(userAction => (eventStatusActions.includes(userAction)))
            .map(resultAction => (
                <ListGroupItem key={resultAction} className="actionItem"
                    onClick={() => this.actionButtonClicked(resultAction)}>
                    {resultAction}
                </ListGroupItem>
            ));

    }


    render() {
        // const { publish } = this.props;
        const { actionType, showEditEvent, showDefaultEvent } = this.state;
        return (
            <React.Fragment>
                <ListGroup>
                    {this.getEventListItems()}
                </ListGroup>
                <Modal
                    show={showDefaultEvent}
                    size="md"
                    aria-labelledby="xample-custom-modal-styling-title"
                    id="modalPublish"
                    centered
                >
                    <Modal.Header id="modal_header">
                        <Modal.Title id="modal_title"> {actionType} EVENT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalDeleteBody" >
                        <DefaultDialogBox close={this.closeDefaultDialogbox} actionType={actionType} />

                    </Modal.Body>
                </Modal>
                {/* <Modal
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
                </Modal> */}
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



const mapStateToProps = (state) => ({
    userType: state.auth.user.designtion
});

export default connect(mapStateToProps, {})(ActionBar);