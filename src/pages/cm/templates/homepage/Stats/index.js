import React from 'react';
import LazyLoad from 'react-lazyload';

import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';

import Stat from './Stat';

import styles from './styles.less';

function Stats() {
  return (
    <React.Fragment>
      <Heading>Make an impact</Heading>
      <Container className={styles.stats}>
        <Stat
          value={'3.5 million'}
          description={'Avg. monthly website hits'}
          color={'#779F2D'}
        />
        <Stat
          value={'2.2 million'}
          description={'Social media fans'}
          color={'#F46B15'}
        />
        <Stat
          value={'1 billion'}
          description={'Social media user reach'}
          color={'#9013fe'}
        />
      </Container>
      <div className={styles.backgroundSlant} />
    </React.Fragment>
  );
}

export default Stats;
