import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.less';

import Card from '../../../layout/Card';

function Meta({ title }) {
  return (
    <div className={styles.meta}>
      <Card>
        <h1>{title}</h1>
        <p></p>
      </Card>
    </div>
  );
}

function mapStateToProps({ query }) {
  return {
    title: query.title,
  };
}

export default connect(mapStateToProps)(Meta);
