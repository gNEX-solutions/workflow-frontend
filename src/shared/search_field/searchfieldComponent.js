import React from "react";
import './searchfield.css'
import 'bootstrap/dist/css/bootstrap.css';
import Overlay from 'react-bootstrap/Overlay';

class SearchFieldComponent extends React.Component {
  constructor (props) {
    super(props);
    
    this.attachRef = target => this.setState({ target });
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  onTextChanged = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0 ){
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions, text: value}));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderSuggesions () {
    const {suggestions, target} = this.state;
    if (suggestions.length === 0){
      return null;
    }
    return (
      <Overlay target={target} placement="bottom" show={true}>
          <ul className="searchbarlist">
            {suggestions.map((item) => <li onClick={(() => this.suggestionSelected(item))}>{item}</li>)}
          </ul>
     </Overlay>
    )
  }

  render() {
    const {text} =this.state;
    return (
      <div className="searchbar">
        <input className="form-control" value={text} onChange = {this.onTextChanged} type="text" ref={this.attachRef}></input>
        {this.renderSuggesions()}
      </div>
    )
  }
}
export default SearchFieldComponent;