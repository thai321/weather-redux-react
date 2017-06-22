// Weather list depend on the state
// needs to map state to props

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) { // for a single city/row
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="orange" sign='K'/>
        </td>
        <td>
          <Chart data={pressure} color="green" sign='hPa'/>
        </td>
        <td>
          <Chart data={humidity} color="black" sign='&#37;'/>
        </td>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          { this.props.weather.map(this.renderWeather) }

        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return {weather: state.weather};
// }
function mapStateToProps({weather}) {
  return { weather }; // {weather} == {weather: weather}
}


export default connect(mapStateToProps)(WeatherList);
