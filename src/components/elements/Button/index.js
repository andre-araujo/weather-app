import React from 'react';
import { func, node } from 'prop-types';

import styles from './styles.less';

function Button({
  onClick,
  children,
}) {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
};

export default Button;
