import React, { Component } from 'react';
import { Row, Col, Dropdown } from "react-bootstrap";
import * as moment from 'moment';
import './calenderComponent.css';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { MenuItem } from '@material-ui/core';
class CalenderCompoennt extends Component {
    state = {
        now: moment(),
        year: 'year'
    }
    weekDayHeaders = moment.weekdaysShort().map((weekday) => {
        return <th>{weekday}</th>
    });
    daysInMonthAmount = moment().daysInMonth();
    firstDay = moment(this.state.now).startOf('month').format('d'); // return the first day of the month
    lastDay = moment(this.state.now).endOf('month').format('d'); // last day of the month

    getDopdownYears = () => {
        var years = [];
        for (var i = 2010; i <= moment().get('year'); i++) {
            years.push(<Dropdown.Item eventKey={i} onSelect={(i, this.yearItemSelected)}>{i}</Dropdown.Item>);
        }
        return years;
    }
    yearItemSelected = (year) => {
        this.setState({
            year: year.toString()
        })
    }

    render() {
        // console.log(moment().get('years'));
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
            blankDaysBefore.push(<td></td>);
        }

        // month date data 
        for (i = 1; i <= this.daysInMonthAmount; i++) {
            let yearCurrent = this.state.now.format("Y");
            let monthCurrent = this.state.now.format("M");
            let dateCurrent = this.state.now.format("D");
            if (dateCurrent == i) {
                daysInMonth.push(<td className="current_date">{i.toString()}</td>)
            } else {
                daysInMonth.push(<td >{i.toString()}</td>)
            }

        }

        // blanks after end of month
        for (i = 6; i > this.lastDay; i--) {
            blankDaysAfter.push(<td></td>);
        }
        // console.log(this.lastDay);
        totalDays = [...blankDaysBefore, ...daysInMonth, ...blankDaysAfter];

        totalDays.forEach((day, i) => {
            if (i < 7) {
                firstWeek.push(day)
            }
            else if (i < 14) {
                secondWeek.push(day)
            } else if (i < 21) {
                thirdWeek.push(day)
            } else if (i < 28) {
                fouthWeek.push(day)
            } else if (i < 35) {
                fifthWeek.push(day)
            } else {
                sixthWeek.push(day)
            }
        })
        return (
            <React.Fragment>
                <div>
                    <Row>
                        <Col className="col-6">
                            <Dropdown>
                                <Dropdown.Toggle variant='outline-info' >
                                    {this.state.year}
                                </Dropdown.Toggle>
                                <DropdownMenu >
                                    {this.getDopdownYears()}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
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