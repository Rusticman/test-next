import React from 'react';

import Container from '../../../layout/Container';
import styles from './styles.less';

function Content() {
  return (
    <div className={styles.block}>
      <Container>
        <div className={styles.content}>
          <div>
            <h2>Custom title</h2>
            <p>Content goes here</p>
          </div>
          <div>
            <img src="https://cdn.checkd.media/illustrations/news.svg" alt="What we do" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
