import React from 'react';

import styles from './styles.less';

function Stat({ value, description, color = '#000' }) {
  return (
    <div className={styles.stat}>
      <div style={{ color }}>{value}</div>
      <p>{description}</p>
    </div>
  );
}

export default Stat;
