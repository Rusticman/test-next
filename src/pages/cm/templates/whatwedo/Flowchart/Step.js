import React from 'react';

import styles from './styles.less';

function Step({ title, description, image }) {
  return (
    <div className={styles.step}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Step;
