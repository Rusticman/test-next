import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import DraftRender from '../../../../../components/DraftRender';

import Container from '../../../layout/Container';
import { mediaUrl } from '../../../../../helpers';
import styles from './styles.less';

function Hero({ name, image, draftContext }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div className={styles.image}>
          <img src={mediaUrl(image, 'lg')} />
        </div>
        <div className={styles.info}>
          <h1>{name}</h1>
          <DraftRender draftContext={draftContext} />
        </div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    name: idx(query, q => q.meta.name) || '',
    image: idx(query, q => q.meta.featured_image) || '',
    draftContext: idx(query, q => q.meta.details) || '',
  };
}

export default connect(mapStateToProps)(Hero);
