import React from 'react';
import { connect } from 'react-redux';

import { mediaUrl } from '../../../../../helpers';

import styles from './styles.less';

function FeaturedImage({ slug }) {
  return (
    <div
      className={styles.featured}
      style={{
        backgroundImage: `url(${mediaUrl(slug)})`,
      }}
    />
  );
}

function mapStateToProps({ query }) {
  return {
    slug: query.meta.featured_image,
  };
}

export default connect(mapStateToProps)(FeaturedImage);
