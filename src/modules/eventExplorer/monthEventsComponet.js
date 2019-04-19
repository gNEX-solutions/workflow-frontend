/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* wifi - D7AAF404  */
import React, { Component } from 'react';

import { Badge } from "react-bootstrap";
import './monthEventcomponents.css';

class MonthEventCompoent extends Component {
    state = {};
    eventsArray = [
        {
            eventId: "1",
            eventName: "im dansela",
            eventDate: new Date('2019-2-13'),
            eventOrganizers: "1"
        },
        {
            eventId: "3",
            eventName: "symposium",
            eventDate: new Date('2019-2-13'),
            eventOrganizers: "4"
        },
        {
            eventId: "2",
            eventName: "im piritha",
            eventDate: new Date('2019-3-13'),
            eventOrganizers: "3"
        },
        {
            eventId: "4",
            eventName: "hack x",
            eventDate: new Date('2019-4-13'),
            eventOrganizers: "2"
        },
        {

            eventId: "5",
            eventName: "agm",
            eventDate: new Date('2019-2-13'),
            eventOrganizers: "1"

        }
    ]


    getFilteredEventList() {
        let { month, level } = this.props;
        const filteredList = this.eventsArray.filter(({ eventDate, eventOrganizers } = {}) => {
            return eventDate.getMonth() === month && level == eventOrganizers;
        }).map(({ eventId, eventName } = {}) => {
            return (<h3> <Badge variant="primary" key={eventId} id="eventInto_badge"> {eventName}  </Badge></h3>);
        });
        return filteredList;
    }

    render() {
        this.getFilteredEventList();
        return (
            <React.Fragment>
                {this.getFilteredEventList()}
            </React.Fragment>
        );
    }
}

export default MonthEventCompoent;
