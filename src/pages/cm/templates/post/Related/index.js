import React from 'react';

import Container from '../../../layout/Container';
import Post from '../../../layout/Post';

import styles from './styles.less';

function Related({ related }) {
  return (
    <div className={styles.related}>
      <h4>Related News</h4>
      <Container>
        <div className={styles.grid}>

          <Post />
          <Post />
          <Post />
        </div>
      </Container>
    </div>
  );
}

export default Related;
