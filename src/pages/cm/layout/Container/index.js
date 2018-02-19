import React from 'react';

import styles from './styles.less';

function Container({ children }) {
  return (
    <div className={styles.container}>
      <div />
      <div>
        {children}
      </div>
      <div />
    </div>
  );
}

export default Container;
