import React from 'react';
import { string, number } from 'prop-types';

import Icon from '../Icon';
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
      <div className={cx.icon}>
        <Icon.Sun />
      </div>
      <div className={cx.content}>
        <div className={cx.temperature}>
          <time dateTime={new Date()}>{day}</time>
          <p className={cx.largeText}>{temperature}ºC</p>
        </div>
        <p className={cx.largeText}>{weather}</p>
        <p className={cx.smallText}>Vento: {wind}</p>
        <p className={cx.smallText}>Humidade: {humidity}</p>
        <p className={cx.smallText}>Pressão: {pressure}</p>
      </div>
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
