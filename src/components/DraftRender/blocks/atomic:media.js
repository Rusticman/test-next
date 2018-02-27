import React from 'react';
import cx from 'classnames';
import styles from './styles.less';

const mapToWidth = {
  sm: 265,
  md: 512,
  lg: 1024,
  xl: 1920,
};

export default function(entity, originalText) {
  const { text: caption, data, data: { media } } = entity;

  const width = mapToWidth[media.size];
  return (
    <figure className={cx(styles[data.alignment], styles.figure)}>
      <img
        src={media.sizes[media.size]}
        alt={caption || 'Media image'}
        className={styles.image}
      />
      <div>
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      </div>
    </figure>
  );
}
