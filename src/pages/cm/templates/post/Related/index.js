import React from 'react';

import Card from '../../../layout/Card';

import styles from './styles.less';

function Related({ related }) {
  return (
    <div className={styles.related}>
      <Card>
        Some content
      </Card>
      <Card>
        Some content
      </Card>
      <Card>
        Some content
      </Card>

    </div>
  );
}

export default Related;
