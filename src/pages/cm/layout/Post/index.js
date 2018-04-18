import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { mediaUrl, createExcerpt } from '../../../../helpers';
import Card from '../Card';

import styles from './styles.less';

function Post({ featured, post }) {
  const {meta: {editor_content_state}} = post;
  return (
    <Card href={`/news/${post.slug}`} padding={false}>
      <article
        className={cx(styles.post, {
          [styles.featured]: featured,
        })}
      >
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${mediaUrl(post.meta.thumbnail_image)})`,
          }}
        />
        <div className={styles.content}>
          <div className={styles.pill}>News</div>
          <h2>{post.title}</h2>
          <h3>{createExcerpt(editor_content_state, 150)}...</h3>
          <br />
          <span className={styles.readMore}>Read More</span>
        </div>
      </article>
    </Card>
  );
}

Post.propTypes = {
  featured: PropTypes.bool,
  post: PropTypes.object.isRequired,
};

Post.defaultProps = {
  featured: false,
};

export default Post;
