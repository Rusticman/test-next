import React from 'react';

import Container from '../../../layout/Container';
import Post from '../../../layout/Post';

import styles from './styles.less';

function Related({ related }) {
  return (
    <div className={styles.related}>
      <Container>
        <h4>Related News</h4>
        <div className={styles.grid}>
          {related.map((p, i) => <React.Fragment key={'related-' + i}><Post
            post={p} /></React.Fragment>)}
        </div>
      </Container>
    </div>
  );
}

export default Related;
