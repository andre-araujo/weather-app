import React, { Component } from 'react';
import { shape, object, arrayOf } from 'prop-types';

import LocationDisplay from '../../elements/LocationDisplay';
import WeatherInfo from '../../elements/WeatherInfo';
import styles from './styles.less';
import { FAHRENHEIT, CELCIUS } from '../../../lib/constants';
import getTemperatureColor from '../../../lib/getTemperatureColor';

class WeatherForecast extends Component {
  state = {
    infoStateList: [true, false, false],
    temperatureUnit: FAHRENHEIT,
  }

  toggleTemperatureUnit = () => {
    this.setState({
      temperatureUnit: this.state.temperatureUnit === FAHRENHEIT ? CELCIUS : FAHRENHEIT,
    });
  }

  openInfoState = (index) => {
    const infoStateList = this.state.infoStateList.map((infoState, infoStateIndex) =>
      infoStateIndex === index);

    this.setState({ infoStateList });
  }

  render() {
    const { infoStateList } = this.state;
    const { weather } = this.props;
    const currentTemp = weather.data[infoStateList.indexOf(true, 0)].temperature;
    const backgroundColor = getTemperatureColor(currentTemp, 0.3);

    return (
      <div className={styles.wrapper} style={{ backgroundColor }}>
        <section className={styles.container}>
          <LocationDisplay city={weather.location.city} state={weather.location.region} />
          <ul>
            {
              weather.data.map((weatherItem, index) => (
                <li key={weatherItem.day}>
                  <WeatherInfo
                    day={weatherItem.day}
                    humidity={weatherItem.humidity}
                    pressure={weatherItem.pressure}
                    temperature={weatherItem.temperature}
                    temperatureUnit={this.state.temperatureUnit}
                    weather={weatherItem.weather}
                    weatherCode={weatherItem.weatherCode}
                    wind={weatherItem.wind}
                    isOpen={infoStateList[index]}
                    onClick={() => this.openInfoState(index)}
                    toggleTemperatureUnit={this.toggleTemperatureUnit}
                  />
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}

WeatherForecast.propTypes = {
  weather: shape({
    data: arrayOf(shape(WeatherInfo.propTypes)),
    location: object,
    units: object,
  }).isRequired,
};

export default WeatherForecast;
