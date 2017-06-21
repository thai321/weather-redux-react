import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
                          // bind this of SearchBar
                          // overwrite the method
  }

  onInputChange(event) { // event happen when we press a key
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) { // stop from submit the form
    event.preventDefault() // don't submit the form

    // We need to go and fetch weather data
  } // we use form since it suppose enter key

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a city to get a five-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }
}
