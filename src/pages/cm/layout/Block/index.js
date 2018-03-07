import React from 'react';
import LazyLoad from 'react-lazyload';

import styles from './styles.less';

function Block({ title, description, img, to }) {
  return (
    <LazyLoad height={200} once offset={100}>
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
    </LazyLoad>
  );
}

export default Block;
