import React, { Fragment } from 'react';
import { string } from 'prop-types';

import Icon from '../Icon';

function WeatherIcon({
  weatherCode,
}) {
  return (
    <Fragment>
      {
        (weatherCode <= 4 || (weatherCode >= 37 && weatherCode <= 40)) &&
        <Icon.Storm />
      }
      {
        weatherCode >= 5 && weatherCode <= 17 &&
        <Icon.Snow />
      }
      {
        weatherCode >= 17 && weatherCode <= 28 &&
        <Icon.Cloudy />
      }
      {
        weatherCode >= 28 && weatherCode <= 30 &&
        <Icon.SunnyCloudy />
      }
      {
        weatherCode >= 31 && weatherCode <= 36 &&
        <Icon.Sun />
      }
      {
        weatherCode > 40 &&
        <Icon.NA />
      }
    </Fragment>
  );
}

WeatherIcon.propTypes = {
  weatherCode: string.isRequired,
};

export default WeatherIcon;
