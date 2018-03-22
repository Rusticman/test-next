import React from 'react';

import styles from './styles.less';

function Container({ children, ...props }) {
  return (
    <div className={styles.container}>
      <div />
      <div {...props}>{children}</div>
      <div />
    </div>
  );
}

export default Container;
