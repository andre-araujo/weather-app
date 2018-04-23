import React from 'react';
import { string } from 'prop-types';

import Icon from '../Icon';
import styles from './styles.css';

function LocationDisplay({
  city,
  state,
}) {
  return (
    <header className={styles.container}>
      <span className={styles.icon}><Icon.Compass className={styles.icon} /></span>
      <h1 className={styles.title}>
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
