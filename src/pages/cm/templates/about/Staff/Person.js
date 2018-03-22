import React from 'react';

import styles from './styles.less';

function Person({ image, name, title, description }) {
  return (
    <div className={styles.person}>
      <div>
        <img src={image} alt={`${name} - ${title}`} />
      </div>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Person;
