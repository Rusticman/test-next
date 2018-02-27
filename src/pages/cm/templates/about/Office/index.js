import React from 'react';

import styles from './styles.less';

function Office() {
  return (
    <div className={styles.office}>
      <div className={styles.content}>
        <h3>Welcome to Checkd Media</h3>
        <p>Based in the heart of Manchester. We are the largest growing media
          community in the Uk...</p>
        <p>We speciialise in Media Management.</p>
        <p>Feel free to look around!</p>
      </div>
      <div>
      <div
        className={styles.image}
      />
      </div>
    </div>
  );
}

export default Office;
