import React from 'react';

import Container from '../Container';
import Button from '../Button';
import styles from './styles.less';

function Pagination({ page, total, limit }) {
  const int = parseInt(page, 10);
  const next = int + 1;
  const previous = int - 1;
  return (
    <Container>
      <div className={styles.pagination}>
        <div className={styles.previous}>
          {page > 1 && <Button href={`/news?page=${previous}`}>Previous</Button>}
        </div>
        <div className={styles.next}>
          {(page * limit) < (total) && <Button href={`/news?page=${next}`}>Next</Button>}
        </div>
      </div>
    </Container>
  );
}

export default Pagination;
