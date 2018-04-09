import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import { mediaUrl } from '../../../../../helpers';
import styles from './styles.less';

function Hero({ name, image, excerpt }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div>
          <img src={mediaUrl(image, 'lg')} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{excerpt}</p>
        </div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    name: idx(query, q => q.meta.name) || '',
    image: idx(query, q => q.meta.featured_image) || '',
    excerpt: idx(query, q => q.meta.excerpt) || '',
  };
}

export default connect(mapStateToProps)(Hero);
