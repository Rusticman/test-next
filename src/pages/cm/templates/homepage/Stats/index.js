import React from 'react';

import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';

import Stat from './Stat';

import styles from './styles.less';

function Stats() {
  return (
    <React.Fragment>
      <Heading>Our impact</Heading>
      <Container className={styles.stats}>
        <Stat
          value={'1,200'}
          description={'People reached last month'}
          color={'#98c63d'}
        />
        <Stat
          value={'1.5 million'}
          description={'People reached last month'}
          color={'#f57223'}
        />
        <Stat
          value={'392,936'}
          description={'People reached last month'}
          color={'#9013fe'}
        />
      </Container>
    </React.Fragment>
  );
}

export default Stats;
