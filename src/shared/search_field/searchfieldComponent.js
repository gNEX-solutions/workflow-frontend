import React from 'react';
import { connect } from 'react-redux';
import { selectEvent } from '../../store/actions/DashBoardActions';
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
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.filter(v => regex.test(v.eventName));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(event) {
    this.setState(() => ({
      text: '',
      suggestions: []
    }));
    this.props.selectEvent(event.eventId);
  }

  renderSuggesions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return suggestions.map(item => (
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
  { selectEvent }
)(SearchFieldComponent);
