import React from 'react';
import cx from 'classnames';

import { mediaUrl } from '../../../../../helpers';
import Card from '../../../layout/Card';

import styles from './styles.less';

function Post({ featured, post }) {
  return (
    <Card
      href={`/news/${post.slug}`}
      padding={false}
    >
      <article
        className={cx(styles.post, {
          [styles.featured]: featured,
        })}
      >
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${mediaUrl(post.meta.featured_image)})`,
          }}
        />
        <div className={styles.content}>
          <div className={styles.pill}>
            News
          </div>
          <h2>{post.title}</h2>
          <h3>{post.meta.excerpt}...</h3>
          <br />
          <a className={styles.readMore}>
            Read More
          </a>
        </div>
      </article>
    </Card>
  );
}

export default Post;
