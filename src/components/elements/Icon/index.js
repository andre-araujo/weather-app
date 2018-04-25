import React from 'react';
import { string } from 'prop-types';

import styles from './styles.less';

function Icon({
  name,
}) {
  return (
    <i className={styles.icon}>{name}</i>
  );
}

Icon.propTypes = {
  name: string.isRequired,
};

Icon.Compass = () => Icon({ name: '(' });
Icon.Sun = () => Icon({ name: 'B' });
Icon.SunnyCloudy = () => Icon({ name: 'H' });
Icon.Cloudy = () => Icon({ name: 'Y' });
Icon.Rainy = () => Icon({ name: 'R' });
Icon.Storm = () => Icon({ name: 'O' });
Icon.Snow = () => Icon({ name: 'X' });
Icon.NA = () => Icon({ name: ')' });

export default Icon;
