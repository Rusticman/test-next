import React from 'react';

import Container from '../Container';
import Button from '../Button';
import styles from './styles.less';

function Pagination({ page }) {
  return (
    <Container>
      <div className={styles.pagination}>
        <div className={styles.previous}>
          {page !== 1 && <Button href={'/'}>Previous</Button>}
        </div>
        <div className={styles.next}>
          <Button href={'/'}>Next</Button>
        </div>
      </div>
    </Container>
  );
}

export default Pagination;
