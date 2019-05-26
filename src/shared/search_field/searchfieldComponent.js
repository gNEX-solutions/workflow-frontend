import React from 'react';
import { connect } from 'react-redux';
import { selectEvent, getSearchEvents } from '../../store/actions/DashBoardActions';
import './searchfield.css';
import { ListGroup } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

class SearchFieldComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      text: ''
    };
  }

  onTextChanged = e => {

    const { getSearchEvents } = this.props;
    const value = e.target.value;
    let suggestions = [];
    this.setState(() => ({
      text: value
    }));
    if (value.length > 0) {
      getSearchEvents(value);
    }
    // this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(event) {
    this.setState(() => ({
      text: '',
      suggestions: []
    }));
    this.props.selectEvent(event.eventId);
  }

  renderSuggesions() {
    const { items } = this.props;
    const { text } = this.state;
    if (items.length === 0 || text === '') {
      return null;
    }
    return items.map(item => (
      <ListGroup.Item onClick={() => this.suggestionSelected(item)} className="resultItem">
        {item.eventName}
      </ListGroup.Item>
    ));
  }

  render() {
    const { text } = this.state;
    return (
      <div className="searchbar">
        <input
          className="form-control"
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        <ListGroup variant="flush">{this.renderSuggesions()}</ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.dashboard.events
});
export default connect(
  mapStateToProps,
  { selectEvent, getSearchEvents }
)(SearchFieldComponent);
