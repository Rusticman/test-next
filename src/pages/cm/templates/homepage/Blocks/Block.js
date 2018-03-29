import React from 'react';
import idx from 'idx';
import { connect } from 'react-redux';
import Card from '../../../layout/Card';
import styles from './styles.less';

function Block({ image, alt, href, title, description }) {
  return (
    <Card href={href}>
      <div className={styles.card}>
        <div className={styles.graphic}>
          <img src={image}
               alt={alt} />
        </div>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>
      </div>
    </Card>
  );
}

function mapStateToProps({ query }, { block }) {
  return {
    title: idx(query, q => q.meta[block].title) || '',
    description: idx(query, q => q.meta[block].description) || '',
  };
}

export default connect(mapStateToProps)(Block);
