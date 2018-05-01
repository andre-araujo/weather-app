import React from 'react';
import { func, node, string } from 'prop-types';

import styles from './styles.less';

function Button({
  type,
  onClick,
  children,
}) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>{children}</button>
  );
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
};

Button.propTypes = {
  onClick: func,
  type: string,
  children: node.isRequired,
};

export default Button;
