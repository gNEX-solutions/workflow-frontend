/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Badge } from "react-bootstrap";
// import SampleDataExp from '../../services/sampleDataEventExp';
import './monthEventcomponents.css';
import moment from 'moment';
import { selectEvent } from "../../store/actions/DashBoardActions";
import { connect } from 'react-redux';



class MonthEventCompoent extends Component {
    state = {};

    // }
    // eventsArray = [
    //     {
    //         eventId: "1",
    //         eventName: "im dansela",
    //         eventDate: new Date('2019-2-13'),
    //         eventOrganizers: "1"
    //     },
    //     {
    //         eventId: "3",
    //         eventName: "symposium",
    //         eventDate: new Date('2019-2-13'),
    //         eventOrganizers: "4"
    //     },
    //     {
    //         eventId: "211",
    //         eventName: "im piritha",
    //         eventDate: new Date('2019-3-13'),
    //         eventOrganizers: "3"
    //     },
    //     {
    //         eventId: "4",
    //         eventName: "hack x",
    //         eventDate: new Date('2019-4-13'),
    //         eventOrganizers: "2"
    //     },
    //     {

    //         eventId: "5",
    //         eventName: "agm",
    //         eventDate: new Date('2019-2-13'),
    //         eventOrganizers: "1"

    //     }
    // ]


    onEventClicked = (event) => {
        // alert('comp clicked');
        console.log(event.target.id);
        this.props.selectEvent(parseInt(event.target.id));
        this.props.onEventCalendarPress();
    }

    getFilteredEventList() {
        const { month, level, events } = this.props;
        const filteredList = events.filter(({ eventDate, eventOrganizer } = {}) => {
            const eventMoment = moment(eventDate, 'YYYY-MM-DD');
            return eventMoment.month() === month && eventOrganizer === level.toString();
            // return eventMoment.month() === month;
        })
            .map(({ eventId, eventName } = {}) => {
                return (
                    <h3 key={eventId}>
                        <Badge pill variant="info" onClick={this.onEventClicked}
                            key={eventId} id={eventId} className="eventInfo_badge">
                            {eventName}
                        </Badge>
                    </h3>);
            });
        return filteredList;

    }



    render() {
        // this.getFilteredEventList();
        return (
            <React.Fragment>
                {this.getFilteredEventList()}
            </React.Fragment>
        );
    }

}
const mapStateToProps = state => ({
    events: state.dashboard.expEvents
});

export default connect(mapStateToProps, { selectEvent })(MonthEventCompoent);
