import React from 'react';

import styles from './styles.less';

function Heading({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {children}
      </div>
    </div>
  );
}

export default Heading;
