import React from 'react';
import { string, number } from 'prop-types';

import cx from './styles.css';

function WeatherInfo({
  day,
  humidity,
  pressure,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className={cx.container}>
      <div className={cx.container}>
        <p>{day}</p>
        <p>{temperature}</p>
      </div>
      <p>{weather}</p>
      <p>Vento: {wind}</p>
      <p>Humidade: {humidity}</p>
      <p>Pressão: {pressure}</p>
    </div>
  );
}

WeatherInfo.defaultProps = {
  day: null,
  humidity: null,
  pressure: null,
  temperature: null,
  weather: null,
  wind: null,
};

WeatherInfo.propTypes = {
  day: string,
  humidity: string,
  pressure: string,
  temperature: number,
  weather: string,
  wind: string,
};

export default WeatherInfo;
