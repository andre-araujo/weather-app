import React from 'react';
import { string } from 'prop-types';

import Icon from '../Icon';
import cx from './styles.css';

function LocationDisplay({
  city,
  state,
}) {
  return (
    <header className={cx.container}>
      <span className={cx.icon}><Icon.Compass className={cx.icon} /></span>
      <h1 className={cx.title}>
        {city}, {state}
      </h1>
    </header>
  );
}

LocationDisplay.defaultProps = {
  city: null,
  state: null,
};

LocationDisplay.propTypes = {
  city: string,
  state: string,
};

export default LocationDisplay;
