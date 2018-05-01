import React from 'react';
import { func, node, string } from 'prop-types';

import styles from './styles.less';

function Button(props) {
  const {
    type,
    onClick,
    children,
  } = props;

  return (
    <button data-test={props['data-test']} className={styles.button} type={type} onClick={onClick}>{children}</button>
  );
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
  'data-test': null,
};

Button.propTypes = {
  onClick: func,
  type: string,
  'data-test': string,
  children: node.isRequired,
};

export default Button;
