import React, { Component } from 'react';

class MonthEventCompoent extends Component {
    state = {};
    render() {
        const month = this.props.month;
        const year = this.props.year;
        return (
            <React.Fragment>
                <p> {month} </p>
                <p> {year}</p>
            </React.Fragment>
        );
    }
}

export default MonthEventCompoent;