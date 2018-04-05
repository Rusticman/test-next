import React, { Component } from 'react';
import { mediaUrl } from '../../../../../helpers';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Hero({ position, description, image }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div >
          <img className={styles.image} src={mediaUrl(image, 'lg')} alt={position} />
        </div>
        <div>
          <Heading>{position}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};

function mapStateToProps({ query }) {
  return {
    position: idx(query, q => q.meta.job_position) || '',
    description: idx(query, q => q.meta.job_description) || '',
    image: idx(query, q => q.meta.featured_image) || '',
  };
}

export default connect(mapStateToProps)(Hero);
