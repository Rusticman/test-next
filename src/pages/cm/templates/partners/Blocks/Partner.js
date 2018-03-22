import React from 'react';

import Card from '../../../layout/Card';
import styles from './styles.less';

function Partner({ partner }) {
  return (
    <Card
      href={'/partners/foobar'}
    >
      <div className={styles.partner}>
        <img src="https://storage.googleapis.com/cdn.checkd.media/logos/cm-dark.svg" alt="Partner Name" />
        <h2>Partner Name</h2>
        <p>
          Partner Excerpt
        </p>
      </div>
    </Card>
  );
}

export default Partner;
