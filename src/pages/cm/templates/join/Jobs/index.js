import React from 'react';

import Container from '../../../layout/Container';
import Job from './Job';

import styles from './styles.less';

function Jobs({ jobs }) {
  if (!jobs.length) {
    return null;
  }

  return (
    <Container>
      <div className={styles.grid}>
        {jobs.slice(1).map((p, i) => <React.Fragment key={'jobs-' + i}><Job job={p} /></React.Fragment>)}
      </div>
    </Container>
  );
}

export default Jobs;
