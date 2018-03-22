import React from 'react';

import Container from '../../../layout/Container';
import Post from '../../../layout/Post';

import styles from './styles.less';

function Posts({ posts }) {
  if (!posts.length) {
    return null;
  }

  const featured = posts[0];

  return (
    <Container>
      <div>
        <Post
          featured
          post={featured}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.grid}>
        {posts.slice(1).map((p) => <Post post={p} />)}
      </div>
    </Container>
  );
}

export default Posts;
