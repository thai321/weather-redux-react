// Search bar is the controller, no need to care about the state
// only binding the action
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
                          // bind this of SearchBar
                          // overwrite the method

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) { // event happen when we press a key
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) { // stop from submit the form
    event.preventDefault() // don't submit the form

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); // the search bar will reload to
    // emptry string


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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
// null here is suppose for the state to prop, but since we don't
//care about changing any state we just put null
