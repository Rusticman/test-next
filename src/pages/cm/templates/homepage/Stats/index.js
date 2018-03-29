import React from 'react';
import LazyLoad from 'react-lazyload';
import idx from 'idx';
import { connect } from 'react-redux';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';

import Stat from './Stat';

import styles from './styles.less';

function Stats({ subheader }) {
  return (
    <React.Fragment>
      <Heading>{subheader}</Heading>
      <Container className={styles.stats}>
        <Stat
          block={'block_statistic_1'}
          color={'#779F2D'}
        />
        <Stat
          block={'block_statistic_2'}
          color={'#F46B15'}
        />
        <Stat
          block={'block_statistic_3'}
          color={'#9013fe'}
        />
      </Container>
      <div className={styles.backgroundSlant} />
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  return {
    subheader: idx(query, q => q.meta.firstSubheader) || '',
  };
}

export default connect(mapStateToProps)(Stats);
