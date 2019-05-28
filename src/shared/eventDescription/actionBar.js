/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import EditEventPannel from '../editEventComponent/editEvent';
import { connect } from 'react-redux';
import DefaultDialogBox from '../defaultDialogBox/defaultDialogBox';
import { eventStatusEnums } from '../../enums/eventStatus';
import { userDesignationEnum } from '../../enums/userDesignationsEnum';
import './actionBar.css';


const userTypes = [
    {
        type: userDesignationEnum.PRESIDENT,
        actions: ['publish', 'edit', 'rollback', 'delete', 'reject', 'approve']
    },
    {
        type: userDesignationEnum.COORDINATOR,
        actions: ['edit']
    },
    {
        type: userDesignationEnum.HOD,
        actions: ['approve', 'reject']
    },
    {
        type: userDesignationEnum.SENIOR_TREASURER,
        actions: ['approve', 'reject']
    }
]

const eventStatuses = [
    {
        type: eventStatusEnums.PENDING,
        actions: ['edit', 'approve', 'reject', 'delete']
    },
    {
        type: eventStatusEnums.CONFIRMED,
        actions: ['rollback', 'delete', 'publish']
    },
    {
        type: eventStatusEnums.PUBLISHED,
        actions: ['delete']
    },
    {
        type: eventStatusEnums.REJECTED,
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
        const { status, designtion } = this.props;
        const userActions = userTypes.filter((userType) => (userType.type === designtion))[0].actions;
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
                        <Modal.Title id="modal_title"> {actionType} Event </Modal.Title>
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
    designtion: state.auth.user.designtion
});

export default connect(mapStateToProps, {})(ActionBar);