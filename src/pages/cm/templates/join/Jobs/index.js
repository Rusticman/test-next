import React from 'react';

import Container from '../../../layout/Container';
import Job from './Job';

import styles from './styles.less';

function Jobs({ jobs }) {
  if (!jobs.length) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={styles.backgroundSlant} />
      <Container className={styles.container}>
        <div className={styles.grid}>
          {jobs.map((p, i) => <React.Fragment key={'jobs-' + i}><Job
            job={p} /></React.Fragment>)}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Jobs;
