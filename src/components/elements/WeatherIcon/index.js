import React, { Fragment } from 'react';
import { string } from 'prop-types';


import range from '../../../lib/range';
import Icon from '../Icon';

const iconDictionary = {
  Storm: [...range(0, 5), ...range(37, 4)],
  Snow: range(5, 12),
  Cloudy: range(17, 10),
  SunnyCloudy: range(28, 3),
  Sun: range(31, 6),
}

function WeatherIcon({
  weatherCode,
}) {
  const code = parseInt(weatherCode);
  const iconKey = Object.keys(iconDictionary)
    .find(key => iconDictionary[key].indexOf(code) != -1)

  const CurrentIcon = Icon[iconKey] || Icon.NA;

  return (
    <Fragment>
      <CurrentIcon />
    </Fragment>
  );
}

WeatherIcon.propTypes = {
  weatherCode: string.isRequired,
};

export default WeatherIcon;
