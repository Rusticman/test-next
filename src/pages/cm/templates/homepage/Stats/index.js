import React from 'react';
import LazyLoad from 'react-lazyload';
import idx from 'idx';
import { connect } from 'react-redux';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';

import Stat from './Stat';

import styles from './styles.less';

function Stats({ statistic_1_value, statistic_1_description, statistic_2_value, statistic_2_description, statistic_3_value, statistic_3_description }) {
  return (
    <React.Fragment>
      <Heading>Make an impact</Heading>
      <Container className={styles.stats}>
        <Stat
          value={statistic_1_value}
          description={statistic_1_description}
          color={'#779F2D'}
        />
        <Stat
          value={statistic_2_value}
          description={statistic_2_description}
          color={'#F46B15'}
        />
        <Stat
          value={statistic_3_value}
          description={statistic_3_description}
          color={'#9013fe'}
        />
      </Container>
      <div className={styles.backgroundSlant} />
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  return {
    statistic_1_value: idx(query, q => q.meta.block_statistic_1.value) || '',
    statistic_1_description: idx(query, q => q.meta.block_statistic_1.description) || '',
    statistic_2_value: idx(query, q => q.meta.block_statistic_2.value) || '',
    statistic_2_description: idx(query, q => q.meta.block_statistic_2.description) || '',
    statistic_3_value: idx(query, q => q.meta.block_statistic_3.value) || '',
    statistic_3_description: idx(query, q => q.meta.block_statistic_3.description) || '',
  };
}

export default connect(mapStateToProps)(Stats);
