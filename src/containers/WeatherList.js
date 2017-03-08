import React from 'react'
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component {

  renderWeather(city) {

    const temperature = this[city].list.map(item => item.main.temp)
    const pressure = this[city].list.map(item => item.main.pressure)
    const humidity = this[city].list.map(item => item.main.humidity)
    const {lon, lat} = this[city].city.coord;

    return (
      <tr key={city}>
        <td>
        <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temperature} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render () {
    const { weather } = this.props;
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(weather).map(this.renderWeather.bind(weather))}
          </tbody>
        </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather,
});

export default connect(mapStateToProps)(WeatherList);
