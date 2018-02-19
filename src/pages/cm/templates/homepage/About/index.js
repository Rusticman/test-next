import React from 'react';

import Container from '../../../layout/Container';
import Button from '../../../layout/Button';

import styles from './styles.less';

function About() {
  return (
    <Container>
      <div
        className={styles.about}
      >
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, sit oratio reformidans te, mel omnis persecuti ut. Nec eu dicta insolens, has
          porro delicatissimi ei. No sea albucius lucilius insolens. Nec omnis aliquam signiferumque in, vel erant
          vivendo electram te, mel eu percipit forensibus. Mucius constituam pri id, sea mucius intellegebat id.
        </p>
        <Button href={'/about'}>
          Read More
        </Button>
      </div>
    </Container>

  );
}

export default About;
