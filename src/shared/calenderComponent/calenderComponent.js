import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import * as moment from 'moment';
import './calenderComponent.css';
import { element } from 'prop-types';
class CalenderCompoennt extends Component {
    state = {
        week1: [1, 2, 3, 4, 5, 6, 7],
        now: moment()
    }
    weekDayHeaders = moment.weekdaysShort().map((weekday) => {
        return <th>{weekday}</th>
    });
    daysInMonthAmount = moment().daysInMonth();
    firstDay = moment(this.state.now).startOf('month').format('d'); // return the first day of the month
    lastDay = moment(this.state.now).endOf('month').format('d');

    render() {

        let daysInMonth = [];
        let blankDaysBefore = [];
        let blankDaysAfter = [];
        let totalDays = [];
        // defining the set of weeks arrays 
        let firstWeek = [];
        let secondWeek = [];
        let thirdWeek = [];
        let fouthWeek = [];
        let fifthWeek = [];
        let sixthWeek = [];

        //  blanks of the beg of the month 
        for (var i = 0; i < this.firstDay; i++) {
            blankDaysBefore.push("");
        }

        // month date data 
        for (var i = 1; i <= this.daysInMonthAmount; i++) {
            daysInMonth.push(i.toString());
        }

        // blanks after end of month
        for (var i = 6; i > this.lastDay; i--) {
            blankDaysAfter.push("");
        }
        // console.log(this.lastDay);
        totalDays = [...blankDaysBefore, ...daysInMonth, ...blankDaysAfter];

        totalDays.forEach((day, i) => {
            if (i < 7) {
                firstWeek.push(<td>{day}</td>)
            }
            else if (i < 14) {
                secondWeek.push(<td>{day}</td>)
            } else if (i < 21) {
                thirdWeek.push(<td>{day}</td>)
            } else if (i < 28) {
                fouthWeek.push(<td>{day}</td>)
            } else if (i < 35) {
                fifthWeek.push(<td>{day}</td>)
            } else {
                sixthWeek.push(<td>{day}</td>)
            }
        })
        return (
            <React.Fragment>
                <div>
                    <Row >
                        <table className="table-condensed table-bordered table-striped">
                            <thead>
                                <tr>
                                    {this.weekDayHeaders}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {firstWeek}
                                </tr>
                                <tr>
                                    {secondWeek}
                                </tr>
                                <tr>
                                    {thirdWeek}
                                </tr>
                                <tr>
                                    {fouthWeek}
                                </tr>
                                <tr>
                                    {fifthWeek}
                                </tr>
                                <tr>
                                    {sixthWeek}
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default CalenderCompoennt;