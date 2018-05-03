import React from 'react';
import { string, oneOfType, number } from 'prop-types';

import range from '../../../lib/range';
import Icon from '../Icon';

export const iconDictionary = {
  Storm: [...range(0, 5), ...range(37, 4), 47],
  Snow: [...range(5, 12), ...range(41, 6)],
  Cloudy: range(17, 10),
  SunnyCloudy: range(27, 4),
  Sun: range(31, 6),
};

function WeatherIcon({
  weatherCode,
}) {
  const code = parseInt(weatherCode, 10);
  const iconKey = Object.keys(iconDictionary)
    .find(key => iconDictionary[key].indexOf(code) !== -1);

  const CurrentIcon = Icon[iconKey] || Icon.NA;

  return (
    <CurrentIcon />
  );
}

WeatherIcon.defaultProps = {
  weatherCode: 3200,
};

WeatherIcon.propTypes = {
  weatherCode: oneOfType([string, number]),
};

export default WeatherIcon;
