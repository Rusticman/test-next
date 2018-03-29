import React from 'react';
import Container from '../../../layout/Container';

import Step from './Step';
import styles from './styles.less';

function Flowchart() {
  return (
    <div className={styles.container}>
      <Container>
        <h2>Our Process</h2>
        <div className={styles.flowchart}>
          <Step
            step={'step_1'}
          />
          <Step
            step={'step_2'}
          />
          <Step
            step={'step_3'}
          />
          <Step
            step={'step_4'}
          />
        </div>
      </Container>
    </div>
  );
}


export default Flowchart;
