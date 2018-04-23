import React from 'react';
import { string, number, bool, func } from 'prop-types';

import { CELCIUS, FAHRENHEIT } from '../../../lib/constants';
import WeatherIcon from '../WeatherIcon';
import styles from './styles.css';
import getTemperatureColor from '../../../lib/getTemperatureColor';
import fahrenheitToCelcius from '../../../lib/fahrenheitToCelcius';

function WeatherInfo({
  day,
  humidity,
  pressure,
  temperature,
  temperatureUnit,
  weather,
  weatherCode,
  wind,
  isOpen,
  onClick,
  toggleTemperatureUnit,
}) {
  const convertedTemperature =
    temperatureUnit === CELCIUS ? fahrenheitToCelcius(temperature) : temperature;

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.active : ''}`}
      style={{ backgroundColor: getTemperatureColor(temperature, temperatureUnit) }}
    >
      <button
        className={styles.openInfo}
        disabled={isOpen}
        onClick={onClick}
      >
        open info
      </button>
      <div className={`${styles.icon} ${styles.hidden}`}>
        <WeatherIcon weatherCode={weatherCode} />
      </div>
      <div className={styles.content}>
        <div className={styles.temperature}>
          <time dateTime={new Date()}>{day}</time>
          <button
            disabled={!isOpen}
            className={styles.toggleTemperature}
            onClick={toggleTemperatureUnit}
          >
            {convertedTemperature}º{temperatureUnit}
          </button>
        </div>
        <div className={styles.hidden}>
          {weather && <p className={styles.largeText}>{weather}</p>}
          {wind && <p className={styles.smallText}>Wind: {wind}</p>}
          {humidity && <p className={styles.smallText}>humidity: {humidity}</p>}
          {pressure && <p className={styles.smallText}>Pressure: {pressure}</p>}
        </div>
      </div>
    </div>
  );
}

WeatherInfo.defaultProps = {
  day: null,
  temperatureUnit: FAHRENHEIT,
  humidity: null,
  pressure: null,
  temperature: null,
  weather: null,
  weatherCode: null,
  wind: null,
  isOpen: false,
};

WeatherInfo.propTypes = {
  day: string,
  temperatureUnit: string,
  toggleTemperatureUnit: func.isRequired,
  humidity: string,
  pressure: string,
  temperature: number,
  weather: string,
  weatherCode: string,
  wind: string,
  isOpen: bool,
  onClick: func.isRequired,
};

export default WeatherInfo;
