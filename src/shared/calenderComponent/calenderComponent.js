import React, { Component } from 'react';
import { Row, Col, Dropdown } from "react-bootstrap";
import * as moment from 'moment';
import './calenderComponent.css';
import DropdownMenu from 'react-bootstrap/DropdownMenu';


import DateCompoent from './dateCompoent';
import TableRowComponent from './tableRowComponent';
class CalenderCompoennt extends Component {
    state = {
        now: moment(),
        year: 2019,
        month: 1,
        displayMonth: 'February',
        activeEventNum: 0
    }
    // changing the first day of the week to monday

    statusArray = [
        '', '', '', 'warn', 'single_check', '', 'double_check', 'single_check', '', '', 'double_check', 'warn', '', '', 'warn', '', '', 'single_check'
    ]
    eventInfo = [
        {
            date: 2,
            state: 'done',
            name: 'dansala'
        },
        {
            date: 12,
            state: 'published',
            name: 'going down'
        },
        {
            date: 15,
            state: 'confirmed',
            name: 'csr project'
        },
        {
            date: 20,
            state: 'pending',
            name: 'carwash'
        },
    ]

    weekDayHeaders = moment.weekdaysShort().map((weekday) => {
        return <th>{weekday}</th>
    });
    daysInMonthAmount;
    firstDay; // return the first day of the month
    lastDay; // last day of the month

    updateMoement() {
        const updatedMoment = moment().set({ 'year': this.state.year, 'month': this.state.month });
        this.daysInMonthAmount = updatedMoment.daysInMonth();
        this.firstDay = updatedMoment.startOf('month').format('d');
        this.lastDay = updatedMoment.endOf('month').format('d')
    }

    getEventInfoComponents() {
        var eventInfoComponents = [];
        var activeString = 'active';
        var inactiveString = 'inactive';
        this.eventInfo.forEach((eventInfo, i) => {
            var eventInfoComponent;
            if (i === this.state.activeEventNum) {
                eventInfoComponent = <TableRowComponent info={eventInfo} id={i} style={activeString} onItemClick={this.eventItemSelected} />;
            }
            else {
                eventInfoComponent = <TableRowComponent info={eventInfo} id={i} style={inactiveString} onItemClick={this.eventItemSelected} />;

            }

            eventInfoComponents.push(eventInfoComponent);


        }
        );
        return eventInfoComponents;

    }



    // console.log()
    getDopdownYears = () => {
        var years = [];
        for (var i = 2010; i <= moment().get('year'); i++) {
            years.push(<Dropdown.Item eventKey={i} onSelect={(i, this.yearItemSelected)}>{i}</Dropdown.Item>);
        }
        return years;
    }
    getDropdownMonths = () => {
        var months = moment.months().map((month, monthIndex) => {
            return <Dropdown.Item eventKey={monthIndex} onSelect={(monthIndex, this.monthItemSelected)}>{month}</Dropdown.Item>
        })
        return months;
    }




    /////////////////  event action functions ////////////////////
    yearItemSelected = (year) => {
        this.setState({
            year: year.toString()
        });
        // console.log(this.state.year);
    }
    monthItemSelected = (monthIndex) => {

        const modifiedMonthIndex = parseInt(monthIndex) + 1;
        this.setState({
            displayMonth: moment(modifiedMonthIndex, 'MM').format('MMMM'),
            month: monthIndex
        });
    }

    eventItemSelected = (id) => {
        // console.log(id);
        this.setState({
            activeEventNum: id
        });
    }

    render() {
        this.updateMoement();
        // console.log(this.state.year);
        // console.log(this.state.month);
        // console.log(this.firstDay);
        // console.log(this.lastDay);
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
            let yearCurrent = parseInt(this.state.now.format("Y"));
            let monthCurrent = parseInt(this.state.now.format("M"));
            let dateCurrent = parseInt(this.state.now.format("D"));
            let editedMonth = parseInt(this.state.month) + 1;
            console.log('month :' + monthCurrent + 'year :' + yearCurrent);
            console.log('mn :' + editedMonth);
            if (dateCurrent === i && monthCurrent === editedMonth && yearCurrent === this.state.year) {
                // if (dateCurrent === i) {
                daysInMonth.push(
                    <td className="current_date">
                        <DateCompoent date={i.toString()} status={this.statusArray[i]} />
                    </td>)
            } else {
                daysInMonth.push(
                    <td >
                        <DateCompoent date={i.toString()} status={this.statusArray[i]} />
                    </td>)
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
                        <Col className="col-6" id="dropdownYear">
                            <Dropdown>
                                <Dropdown.Toggle variant='outline-info' >
                                    {this.state.year}
                                </Dropdown.Toggle>
                                <DropdownMenu >
                                    {this.getDopdownYears()}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col className="col-6">
                            <Dropdown>
                                <Dropdown.Toggle variant='outline-info' >
                                    {this.state.displayMonth}
                                </Dropdown.Toggle>
                                <DropdownMenu >
                                    {this.getDropdownMonths()}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row id="calender_row">

                        <table className="table-condensed table-bordered table-striped" id="cal_table">
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
                    <Row >
                        <table class="table  ">
                            <tbody>
                                {this.getEventInfoComponents()}
                            </tbody>
                        </table>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default CalenderCompoennt;