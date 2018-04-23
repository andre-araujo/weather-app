import React from 'react';
import { string } from 'prop-types';

import cx from './styles.css';

function Icon({
  name,
}) {
  return (
    <i className={cx.icon}>{name}</i>
  );
}

Icon.propTypes = {
  name: string.isRequired,
};

Icon.Compass = () => Icon({ name: '(' });
Icon.Sun = () => Icon({ name: 'B' });
Icon.Cloudy = () => Icon({ name: 'H' });
Icon.Rainy = () => Icon({ name: 'R' });
Icon.Storm = () => Icon({ name: 'O' });

export default Icon;
