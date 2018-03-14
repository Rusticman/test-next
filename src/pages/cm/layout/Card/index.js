import React from 'react';

import styles from './styles.less';

function Card({ children, ...props }) {
  return (
    <div
      className={styles.card}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
