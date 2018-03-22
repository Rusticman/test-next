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
            image={'https://cdn.checkd.media/illustrations/about.svg'}
            title={'Your Brand'}
            description={'Your brand content here'}
          />
          <Step
            image={'https://cdn.checkd.media/illustrations/about.svg'}
            title={'Checkd Media'}
            description={'Your brand content here'}
          />
          <Step
            image={'https://cdn.checkd.media/illustrations/about.svg'}
            title={'Our Platforms'}
            description={'Your brand content here'}
          />
          <Step
            image={'https://cdn.checkd.media/illustrations/about.svg'}
            title={'Virality'}
            description={'Your brand content here'}
          />
        </div>
      </Container>
    </div>
  );
}

export default Flowchart;
