import React from 'react';

import styles from './styles.less';

function Person({ image, to }) {
  return (
    <div
      className={styles.person}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <a
        href={to}
      >
        <div className={styles.mask} />
      </a>
    </div>
  );
}

export default Person;
