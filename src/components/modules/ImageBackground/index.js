import React from 'react';
import { node, string } from 'prop-types';

import styles from './styles.css';

function ImageBackground({
  children,
  imageURL,
}) {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <img className={styles.image} src={imageURL} alt="background" />
      </figure>
      {children}
    </div>
  );
}

ImageBackground.defaultProps = {
  children: null,
  imageURL: '#',
};

ImageBackground.propTypes = {
  children: node,
  imageURL: string,
};

export default ImageBackground;
