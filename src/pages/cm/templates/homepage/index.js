import React from 'react';
import styles from './styles.less';

function Homepage() {
  return (
    <React.Fragment>
      <div className={styles.homepage}>
        HOMEPAGE
        <div>
            <a className={styles.anchor} href="/news">News</a>
          </div>
    </div>
      <div className={styles.grid}>
          <div></div>
          <div></div>
        </div>
    </React.Fragment>
  );
}

export default Homepage;
