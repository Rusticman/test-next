import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero({ image, name, about }) {
  return (
    <Container className={styles.content}>
      <div className={styles.hero}>
        <div >
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{about}</p>
        </div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    image: idx(query, q => q.meta.image) || '',
    name: idx(query, q => q.meta.name) || '',
    about: idx(query, q => q.meta.block_about) || '',
  };
}

export default connect(mapStateToProps)(Hero);
