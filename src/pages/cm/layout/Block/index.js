import React from 'react';

import styles from './styles.less';

function Block({ title, description, img, to }) {
  return (
    <div className={styles['block-wrapper']}>
      <a
        href={to}
        className={styles.block}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={styles.layer} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Block;
