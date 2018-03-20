import React from 'react';

import Container from '../../../layout/Container';
import Card from '../../../layout/Card';

import styles from './styles.less';

function Related({ related }) {
  return (
    <div className={styles.related}>
      <h4>Related News</h4>
      <Container>
        <div className={styles.grid}>
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
      </Container>
    </div>
  );
}

export default Related;
