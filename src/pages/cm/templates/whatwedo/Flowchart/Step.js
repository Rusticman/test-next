import React from 'react';
import { connect } from 'react-redux';
import { mediaUrl } from '../../../../../helpers';
import idx from 'idx';
import styles from './styles.less';

function Step({ title, description, image }) {
  return (
    <div className={styles.step}>
      <img src={mediaUrl(image, 'md')} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function mapStateToProps({ query }, { step }) {
  return {
    title: idx(query, q => q.meta[step].title) || '',
    description: idx(query, q => q.meta[step].description) || '',
    image: idx(query, q => q.meta[step].image) || '',
  };
}

export default connect(mapStateToProps)(Step);
